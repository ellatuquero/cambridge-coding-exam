import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './QuestionBox.module.css'
import QuestionOption from './QuestionOption/QuestionOption';

type QuestionBoxTypeProp = {
    questionLength: number;
    questionNumber: number;
    instruction: string;
    question: string;
    options: string[];
    timeLimit: number;
    onSubmitOption: (answer : string) => void;
    onSubmitExam: () => void;
};

const QuestionBox = ({
    questionLength,
    questionNumber,
    instruction,
    question,
    options,
    timeLimit,
    onSubmitOption,
    onSubmitExam,
}: QuestionBoxTypeProp) => {

    const [isLoadingQuestion, setIsLoadingQuestion] = useState(false);
    const [remainingTime, setRemainingTime] = useState(timeLimit);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        if(!isLoadingQuestion) {
            const timer = setTimeout(() => {
                if(remainingTime > 0) {
                    setRemainingTime(remainingTime - 1)
                }else{
                    setSelectedOption('')
                    onSubmitOption('')
                    setRemainingTime(timeLimit)

                    if(questionNumber === questionLength) {
                        onSubmitExam();
                    }
                }
            },1000);

            return () => clearTimeout(timer)
        }
        setSelectedOption('')
        setIsLoadingQuestion(true)
    }, [questionNumber, remainingTime]);

    const handleOptionSelect = (option : string) => {
        setSelectedOption(option);
    };

    const handleOptionSubmit = (answer : string) => {
        onSubmitOption(answer);
        setRemainingTime(timeLimit)
    };

    const handleExamSubmit = () => {
        onSubmitExam();
    };

    return (
        <Card className={styles.questionBox}>
            <Card.Header className={styles.cardHeader}>{questionNumber}. {instruction}</Card.Header>
            <Card.Body>
                <Card.Title>{question}</Card.Title>
                <Row >
                    {options.map((option, index) => (
                        <Col key={index} xs={6} className={styles.optionBox}>
                            <QuestionOption
                                option={option} 
                                isSelected={ selectedOption === option ? true : false }
                                onSelectOption={(e) => handleOptionSelect(e)}
                            />
                        </Col>
                    ))}
                </Row>
            </Card.Body>
            <Card.Footer >
                <div className={styles.footerContainer}>
                    <div className={`${styles.itemAlignLeft} ${styles.timer}`}>
                        <p>Time Left: {remainingTime} seconds</p>
                    </div>
                    <div className={styles.itemAlignCenter}>
                        <p className={styles.questionInfo}>{questionNumber} out of {questionLength}</p>
                    </div>
                    <div className={`${styles.itemAlignRight} ${styles.nextBtn}`}>
                        {
                            questionNumber === questionLength ? (
                                <FontAwesomeIcon 
                                    size="2xl"
                                    className={`${styles.iconLayout} ${_.isEmpty(selectedOption) ? styles.iconInactive : ''}`}
                                    onClick={() => handleExamSubmit()}
                                    icon={faCheckCircle}  
                                />
                            )
                            : (
                                <FontAwesomeIcon 
                                    size="2xl"
                                    className={`${styles.iconLayout} ${_.isEmpty(selectedOption) ? styles.iconInactive : ''}`}
                                    onClick={() => handleOptionSubmit(selectedOption)}
                                    icon={faArrowCircleRight} 
                                />
                            )
                        }
                    </div>
                </div>
                
            </Card.Footer>
        </Card>
    );
};

export default QuestionBox;
