import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './StartExamBtn.module.css'
import Link from 'next/link'

const StartExamBtn = () => {
  return (
    <div className={styles.btnContainer}>
      <Link className={`${styles.customPrimary} btn btn-primary`} href='/quiz'>Start Now</Link> 
    </div>
  )
}

export default StartExamBtn