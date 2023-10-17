import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './Home.module.css'
import StartExamBtn from './StartExamBtn/StartExamBtn'
const Home = () => {
  return (
    <Container className={styles.upper} data-testid='homeSectionContainer'>
        <Row>
            <h1>English Grammar Practice Tests</h1>
        </Row>
        <Row className='mt-3'>
            <h5>Preparing for your Cambridge English exam?</h5>
            <h6>Get ready with the experts in exam practice.</h6>
        </Row>
        <Row className='mt-5 mb-5'>
            <StartExamBtn />
        </Row>
    </Container>
  )
}

export default Home