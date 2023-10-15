import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { QuestionList } from '../data/question';
import Questions from '../components/Questions/Questions';

const page = () => {
    return (
        <Container>
            <Row>
                <Questions questions={QuestionList} />
            </Row>
        </Container>
    );
};

export default page;
