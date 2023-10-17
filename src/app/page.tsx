
import { Container, Row } from 'react-bootstrap'
import { CourseList } from '@/app/data/courses'
import styles from './page.module.css'
import Courses from './components/Courses/Courses'
import Home from './components/Home/Home'

export default function HomePage() {
    return (
    <Container className={styles.homepageContainer}>
        <Row>
            <Home />
        </Row>
        <Row>
            <Courses headerText='Cambridge Courses' courseList={CourseList} />
        </Row>
    </Container>
  )
}
