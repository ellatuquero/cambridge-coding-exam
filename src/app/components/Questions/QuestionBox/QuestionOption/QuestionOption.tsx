import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import styles from './QuestionOption.module.css';

type OptionTypeProp = {
    option : string;
    onSelectOption: (option : string) => void;
}

const QuestionOption = ({ option, onSelectOption } : OptionTypeProp) => {

    const [isSelectedBox, setSelectedBox] = useState(false);

    const handleSelectedCard = (option : string) => {
        setSelectedBox(true)
        onSelectOption(option)
    }
    
    return (
        <Card className={`${isSelectedBox ? styles.activeBox : ''}`}>
            <Card.Body
                onClick={() => handleSelectedCard(option)}
            >
                <Card.Text>{option}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default QuestionOption