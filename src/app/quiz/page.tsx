import _ from 'lodash'
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { QuestionList } from '../data/question';
import Questions from '../components/Questions/Questions';

const page = () => {

    const currentQuestion = QuestionList.map((questionObj) => {
        return {
          ...questionObj,
          options : _.shuffle(questionObj.options)
        }
    });

    return (
        <Container>
            <Row>
                <Questions questions={currentQuestion} />
            </Row>
        </Container>
    );
};

export default page;
