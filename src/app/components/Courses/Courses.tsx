import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CourseTypes } from '@/app/data/courses'

import styles from './Courses.module.css'
import CourseCard from './CourseCard/CourseCard';

type CourseTypeProp = {
    headerText : string;
    courseList: CourseTypes[];
};

const Courses = ({
    headerText,
    courseList
}: CourseTypeProp) => {
  return (
    <Container>
        <Row className='text-center mb-5'>
            <h1>{headerText}</h1>
        </Row>
        <Row
            className={styles.grid}
        >
            {courseList.map((courseObj, index) => (
                <CourseCard courseName={courseObj.courseName} description={courseObj.description} />
            ))}
        </Row>
    </Container>
  )
}

export default Courses