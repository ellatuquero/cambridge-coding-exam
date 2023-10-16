import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import styles from './QuestionOption.module.css';

type OptionTypeProp = {
    option : string;
    isSelected : boolean;
    onSelectOption: (option : string) => void;
}

const QuestionOption = ({ option, isSelected, onSelectOption } : OptionTypeProp) => {

    return (
        <Card className={`${isSelected ? styles.activeBox : ''}`}>
            <Card.Body
                onClick={() => onSelectOption(option)}
            >
                <Card.Text>{option}</Card.Text>
            </Card.Body>
        </Card>
    )
    
}

export default QuestionOption