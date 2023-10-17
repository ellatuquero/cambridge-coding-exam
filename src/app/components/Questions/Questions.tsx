'use client';

import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { QuestionTypes } from '@/app/data/question';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styles from './Questions.module.css';
import QuestionBox from './QuestionBox/QuestionBox';
import Result from '../Result/Result';

type QuestionTypeProp = {
    questions: QuestionTypes[];
};

const Questions = ({ questions }: QuestionTypeProp) => {
    const [currentQuestions, setCurrentQuestions] = useState(questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([] as string[]);
    const [totalScore, setTotalScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmittingExam, setIsSubmittingExam] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [isLoading]);

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
        questionAnswers.map((ans, i) => {
            if(_.isEqual(ans, userAnswers[i])) {
                userTotalScore += 1
            }
        })
        setTotalScore(userTotalScore);
        setIsLoading(true)
        setIsSubmittingExam(true)
        console.log(userAnswers);
    };

    const renderLoading = () => {
        return (
            <div className={styles.loadingContainer} >
                <FontAwesomeIcon 
                    size="2xl"
                    icon={faSpinner} 
                    spin={true}
                />
            </div>
        )
    }

    const currentQuestion = currentQuestions[currentQuestionIndex];
  
    return (
        <Container className={styles.componentContainer}>
            <Row>
                {
                    isLoading ?  renderLoading()
                    : (
                        isSubmittingExam ? (
                            isLoading ? renderLoading() :
                            <Result totalQuestionLength={_.size(questions)} totalScore={totalScore}/>
                        ) : (
                            <QuestionBox
                                questionLength={_.size(questions)}
                                questionNumber={currentQuestionIndex + 1}
                                instruction={currentQuestion.instruction}
                                question={currentQuestion.question}
                                options={currentQuestion.options}
                                timeLimit={currentQuestion.timeLimit}
                                onSubmitExam={handleSubmitExam}
                                onSubmitOption={handleSubmitOption}
                            />
                        )
                    )
                }   
            </Row>
        </Container>
    );
};

export default Questions;
