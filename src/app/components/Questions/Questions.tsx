'use client';

import React, { useState } from 'react'
import { QuestionTypes } from '@/app/data/question'
import { Container, Row } from 'react-bootstrap'
import _ from 'lodash'
import QuestionBox from './QuestionBox/QuestionBox'
import styles from './Questions.module.css'

type QuestionTypeProp = {
    questions : QuestionTypes[]
}

const Questions = ({ questions } : QuestionTypeProp) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = (answer : string) => {
        console.log(answer)
      if (!isSubmitting) {
        // setUserAnswers([...userAnswers, answer]);
        setIsSubmitting(true);
        setTimeout(() => {
          if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsSubmitting(false);
          } else {
            // Handle end of the exam, e.g., display results
          }
        }, 1000);
      }
    };
    
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Container className={styles.componentContainer}>
            <Row
            >
                <QuestionBox
                    questionLength={_.size(questions)}
                    questionNumber={currentQuestionIndex+1}
                    instruction={currentQuestion.instruction}
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    timeLimit={5}
                    onSubmit={handleSubmit}
                />
            </Row>
        </Container>
    )
}

export default Questions