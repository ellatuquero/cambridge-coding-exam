export type QuestionTypes = {
    instruction : string;
    question : string;
    options : string[];
    correctAnswer : string;
    timeLimit : number;
}

export const QuestionList : QuestionTypes[] = [
    {
        "instruction" : "Select the best word for the blank in the following sentence.",
        "question": "We always ______ before the test.",
        "options": ["studies", "study", "was studying", "will studying"],
        "correctAnswer": "study",
        "timeLimit": 20
    },
    {
        "instruction" : "Select the best word(s) to complete the sentence.",
        "question": "In her free time, Veronica loves __________, reading, and trying new recipes.",
        "options": ["dance", "dancing", "to dance", "to dancing"],
        "correctAnswer": "dancing",
        "timeLimit": 20 
    },
    {
        "instruction" : "Choose the correct word to complete the sentence.",
        "question": "I was really craving chocolate, ____ I went to the store and bought some.",
        "options": ["so", "but", "for", "while"],
        "correctAnswer": "so",
        "timeLimit": 20
    },
    {
        "instruction" : "Select the best pair of words to complete the sentences.",
        "question": "Every Saturday, Oscar likes ____ go skiing in the mountains. Allie likes skiing, ______.",
        "options": ["to; too", "too; to", "two; to", "too; two"],
        "correctAnswer": "to; too",
        "timeLimit": 20
    },
    {
        "instruction" : "Select the best group of words to complete the sentence.",
        "question": "Mississippi is ______ of here.",
        "options": ["South", "SOUTH", "SouthEast", "south"],
        "correctAnswer": "south",
        "timeLimit": 20
    },
    {
        "instruction" : "Which word from the following sentence is an adverb?",
        "question": "Edward carefully placed the eggs on the wooden table.",
        "options": ["Edward", "carefully", "wooden", "placed"],
        "correctAnswer": "carefully",
        "timeLimit": 20
    },
    {
        "instruction" : "Which word in the following sentence is grammatically incorrect?",
        "question": "I would rather go to Costa Rica then to Florida for vacation.",
        "options": ["for", "then", "rather", "vacation"],
        "correctAnswer": "then",
        "timeLimit": 20
    },
    {
        "instruction" : "Which word in the following sentence is grammatically incorrect?",
        "question": "I would of called you, but my phone was broken.",
        "options": ["of", "called", "broken", "would"],
        "correctAnswer": "of",
        "timeLimit": 20
    },
    {
        "instruction" : "Select the best word to complete the sentence.",
        "question": "The ant marched quickly back to ____ home.",
        "options": ["its", "it's", "their", "its'"],
        "correctAnswer": "its",
        "timeLimit": 20
    },
    {
        "instruction" : "Select the best word(s) for the blank in the following sentence.",
        "question": "First, he’s visiting London and then he _________ to Scotland.",
        "options": ["traveled", "would travel", "will be traveling", "has traveled"],
        "correctAnswer": "will be traveling",
        "timeLimit": 20
    }
]