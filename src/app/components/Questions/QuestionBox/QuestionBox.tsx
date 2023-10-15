import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styles from './QuestionBox.module.css'
import QuestionOption from './QuestionOption/QuestionOption';
import Image from "next/image";

type QuestionBoxTypeProp = {
    questionLength : number;
    questionNumber: number;
    instruction: string;
    question: string;
    options: string[];
    timeLimit: number;
    onSubmit: (answer : string) => void;
};

const QuestionBox = ({
    questionLength,
    questionNumber,
    instruction,
    question,
    options,
    timeLimit,
    onSubmit
}: QuestionBoxTypeProp) => {

    const [remainingTime, setRemainingTime] = useState(timeLimit);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
      const timer = setTimeout(() => {
            if(remainingTime > 0) {
                setRemainingTime(remainingTime - 1)
            }else{
                onSubmit('')
            }
        },1000);

        return () => clearTimeout(timer)
    });
  
    const handleOptionSelect = (option : string) => {
        setSelectedOption(option);
    };

    const handleOptionSubmit = (answer : string) => {
        onSubmit(answer);
        setRemainingTime(timeLimit)
    };

    return (
        <Card className={styles.questionBox}>
            <Card.Header className={styles.cardHeader}>{questionNumber}. {instruction}</Card.Header>
            <Card.Body>
                <Card.Title>{question}</Card.Title>
                <Row>
                    {options.map((option, index) => (
                        <Col index={index} xs={6} className={styles.optionBox}>
                            <QuestionOption
                                option={option} 
                                onSelectOption={(e) => handleOptionSelect(e)}
                            />
                        </Col>
                    ))}
                </Row>
            </Card.Body>
            <Card.Footer >
                <div className={styles.footerContainer}>
                    <div className={styles.itemAlign}>
                        <p className={styles.questionInfo}>{questionNumber} out of {questionLength} question</p>
                    </div>
                    <div className={`${styles.itemAlign} ${styles.nextBtn}`}>
                        <Image
                            onClick={() => handleOptionSubmit(selectedOption)}
                            width={32}
                            height={32}
                            src="/arrow-right-circle.svg"
                            alt="Arrow Right"
                        />
                    </div>
                </div>
                <p>Time Left: {remainingTime} seconds</p>
            </Card.Footer>
        </Card>
    );
};

export default QuestionBox;
