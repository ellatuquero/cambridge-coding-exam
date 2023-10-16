import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import { Card, Col, Row } from 'react-bootstrap';
import styles from './QuestionBox.module.css'
import QuestionOption from './QuestionOption/QuestionOption';
import Image from "next/image";

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

    const [remainingTime, setRemainingTime] = useState(timeLimit);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        
        const timer = setTimeout(() => {
            if(remainingTime > 0) {
                setRemainingTime(remainingTime - 1)
            }else{
                onSubmitOption('')
            }
        },1000);
        
        setSelectedOption('')

        return () => clearTimeout(timer)
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
                    <div className={`${styles.itemAlign} ${styles.timer}`}>
                        <p>Time Left: {remainingTime} seconds</p>
                    </div>
                    <div className={styles.itemAlign}>
                        <p className={styles.questionInfo}>{questionNumber} out of {questionLength}</p>
                    </div>
                    <div className={`${styles.itemAlign} ${styles.nextBtn}`}>
                        {
                            questionNumber === questionLength ? (
                                <Image
                                    onClick={() => handleExamSubmit()}
                                    width={32}
                                    height={32}
                                    src="/submit-success.svg"
                                    alt="
                                    Arrow Right"
                                />
                            ) : (
                                <Image
                                    onClick={() => handleOptionSubmit(selectedOption)}
                                    width={32}
                                    height={32}
                                    src="/arrow-right-circle.svg"
                                    alt="Arrow Right"
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
