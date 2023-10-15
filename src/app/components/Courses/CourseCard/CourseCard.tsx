'use client';

import React from 'react'
import { Card } from 'react-bootstrap'
import { CourseTypes } from '@/app/data/courses'

import styles from './CourseCard.module.css'

const CourseCard = ({
    courseName,
    description
}: CourseTypes) => {
  return (
    <Card className={styles.card}>
        <Card.Body>
            <Card.Title>{courseName}</Card.Title>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default CourseCard