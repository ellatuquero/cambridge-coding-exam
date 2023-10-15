import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './Home.module.css'
import StartExamBtn from './StartExamBtn/StartExamBtn'
const Home = () => {
  return (
    <Container className={styles.upper}>
        <Row>
            <h1>English Grammar Practice Tests</h1>
        </Row>
        <Row className='mt-3'>
            <h4>Preparing for your Cambridge English exam?</h4>
            <h5>Get ready with the experts in exam practice.</h5>
        </Row>
        <Row className='mt-5 mb-5'>
            <StartExamBtn />
        </Row>
    </Container>
  )
}

export default Home