import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import { CourseList, CourseTypes } from '@/app/data/courses'
import styles from './Result.module.css'
import Courses from '../Courses/Courses'

type ResultTypeProp = {
    totalQuestionLength : number;
    totalScore: number;
}

const Result = ({ totalQuestionLength, totalScore } : ResultTypeProp )  => {

    const [courseList, setCourseList] = useState(CourseList);  
    const [recommendedCourses, setRecommendedCourses] = useState([] as CourseTypes[]);  

    /* Notes
        Score between 1-4  (Low Score)     = B2 First & C1 Advance
        Score between 4-7  (Average Score) = B2 First for Schools 
        Score between 8-10 (High Score)    = B1 Preliminary for Schools & A2 Key for Schools
    */

    useEffect(() => {
        const recommended = _.reject(_.map(courseList, (course) => {
            if(totalScore <= 4) {
                if(_.isEqual(course.recommendedType, 'Low')) {
                    return course
                }
            }
            else if (totalScore >= 4 && totalScore <= 7) {
                if(_.isEqual(course.recommendedType, 'Average')) {
                    return course
                }
            }
        
            else if (totalScore >= 8 && totalScore <= 10) {
                if(_.isEqual(course.recommendedType, 'High')) {
                    return course
                }
            }

        }), _.isEmpty) as CourseTypes[]

        setRecommendedCourses(recommended);
        
    }, [totalScore]);

    return (
        <Container className={styles.resultContainer}>
            <Row>
                <h1>Exam Result</h1>
                <h4>{totalScore} of {totalQuestionLength} questions answered correctly</h4>
            </Row>
            <Row className='mt-5 mb-5'>
                <div className={styles.btnContainer}>
                    <Link className={`${styles.customPrimary} btn btn-primary`} href='/'>Back to Homepage</Link> 
                </div>
            </Row>
            <Row>
                <Courses headerText='Recommended Course(s)' courseList={recommendedCourses} />
            </Row>
        </Container>
    )
}

export default Result