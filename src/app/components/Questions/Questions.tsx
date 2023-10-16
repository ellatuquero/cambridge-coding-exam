'use client';

import React, { useState } from 'react';
import _ from 'lodash';
import { QuestionTypes } from '@/app/data/question';
import { Container, Row } from 'react-bootstrap';
import QuestionBox from './QuestionBox/QuestionBox';
import styles from './Questions.module.css';
import Result from '../Result/Result';

type QuestionTypeProp = {
    questions: QuestionTypes[];
};

const Questions = ({ questions }: QuestionTypeProp) => {
    const [currentQuestions, setCurrentQuestions] = useState(questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([] as string[]);
    const [totalScore, setTotalScore] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmittingExam, setIsSubmittingExam] = useState(false);

    const handleSubmitOption = (answer: string) => {
        if (!isSubmitting) {
            setUserAnswers([...userAnswers, answer]);
            setIsSubmitting(true);
            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setIsSubmitting(false);
                }
            }, 1000);
        }
    };

    const handleSubmitExam = () => {
        let userTotalScore = 0
        const questionAnswers = _.toArray(_.mapValues(currentQuestions, 'correctAnswer'))
        const questionUserAnswers = userAnswers;
        questionAnswers.map((ans, i) => {
            if(_.isEqual(ans, questionUserAnswers[i])) {
                userTotalScore += 1
            }
        })

        setTotalScore(userTotalScore);
        setIsSubmittingExam(true)
        
    };

    const currentQuestion = currentQuestions[currentQuestionIndex];

    return (
        <Container className={styles.componentContainer}>
            <Row>
            {
                isSubmittingExam ? (
                    <Result totalQuestionLength={_.size(questions)} totalScore={totalScore}/>
                ) : (
                    <QuestionBox
                        questionLength={_.size(questions)}
                        questionNumber={currentQuestionIndex + 1}
                        instruction={currentQuestion.instruction}
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        timeLimit={5}
                        onSubmitExam={handleSubmitExam}
                        onSubmitOption={handleSubmitOption}
                    />
                )
            }
        
                
            </Row>
        </Container>
    );
};

export default Questions;
