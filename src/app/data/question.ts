export type QuestionTypes = {
    instruction : string;
    question : string;
    options : string[];
    correctAnswer : string;
    correctSentence : string;
    explantion : string;
    timeLimit : number;
}

export const QuestionList : QuestionTypes[] = [
    {
        "instruction" : "Select the best word for the blank in the following sentence.",
        "question": "We always ______ before the test.",
        "options": ["studies", "study", "was studying", "will studying"],
        "correctAnswer": "study",
        "correctSentence" : "We always study before the exam.",
        "explantion" : "The subject and verb must agree. The present tense form is “we study”, the past tense is “we studied”, and the future tense is “we will study”.",
        "timeLimit": 5 
    },
    {
        "instruction" : "Select the best word(s) to complete the sentence.",
        "question": "In her free time, Veronica loves __________, reading, and trying new recipes.",
        "options": ["dance", "dancing", "to dance", "to dancing"],
        "correctAnswer": "dancing",
        "correctSentence" : "In her free time, Veronica loves dancing, reading, and trying new recipes.",
        "explantion" : "When we’re writing and speaking, we should be mindful of parallel structure. Since the two other verbs in the list are in the gerund (-ing) form, dance should be in the gerund form as well.",
        "timeLimit": 6 
    },
    {
        "instruction" : "Choose the correct word to complete the sentence.",
        "question": "I was really craving chocolate, ____ I went to the store and bought some.",
        "options": ["so", "but", "for", "while"],
        "correctAnswer": "so",
        "correctSentence" : "I was really craving chocolate, so I went to the store and bought some.",
        "explantion" : "Although each option is a conjunction, only so, meaning therefore, makes logical sense in this situation.",
        "timeLimit": 5 
    },
    {
        "instruction" : "Select the best pair of words to complete the sentences.",
        "question": "Every Saturday, Oscar likes ____ go skiing in the mountains. Allie likes skiing, ______.",
        "options": ["to; too", "too; to", "two; to", "too; two"],
        "correctAnswer": "to; too",
        "correctSentence" : "Every Saturday, Oscar likes to go skiing in the mountains. Allie likes skiing, too.",
        "explantion" : "The first blank space should be filled with the preposition “to” because it’s a part of the infinitive form of the verb (“to go skiing”). The second space should be completed with “too”, since it’s another way of saying “also”.",
        "timeLimit": 6
    },
    {
        "instruction" : "Select the best group of words to complete the sentence.",
        "question": "Mississippi is ______ of here.",
        "options": ["South", "SOUTH", "SouthEast", "south"],
        "correctAnswer": "south",
        "correctSentence" : "Mississippi is south of here.",
        "explantion" : "We only capitalize the directions (north, south, east, and west) when we’re referring to a specific region (e.g. I’ve never been to the South). Since we’re just speaking about a general direction in this case, it’s incorrect to capitalize it.",
        "timeLimit": 6
    },
    {
        "instruction" : "Which word from the following sentence is an adverb?",
        "question": "Edward carefully placed the eggs on the wooden table.",
        "options": ["Edward", "carefully", "wooden", "placed"],
        "correctAnswer": "Carefully",
        "correctSentence" : "Mississippi is south of here.",
        "explantion" : "We know that carefully is an adverb because it modifies, or gives us more information about, the verb. It answers the question “How did Edward place the eggs?”",
        "timeLimit": 5
    },
    {
        "instruction" : "Which word in the following sentence is grammatically incorrect?",
        "question": "I would rather go to Costa Rica then to Florida for vacation.",
        "options": ["for", "then", "rather", "vacation"],
        "correctAnswer": "then",
        "correctSentence" : "I would rather go to Costa Rica than to Florida for vacation.",
        "explantion" : "In this case, we’re comparing two different items. We know this for sure because of the word “rather”. We need to use “than” instead of “then”. The corrected form is noted above.",
        "timeLimit": 6
    },
    {
        "instruction" : "Which word in the following sentence is grammatically incorrect?",
        "question": "I would of called you, but my phone was broken.",
        "options": ["of", "called", "broken", "would"],
        "correctAnswer": "of",
        "correctSentence" : "I would have called you, but my phone was broken.",
        "explantion" : "Although they’re often pronounced the same in spoken English, the correct form is “would have”. The correction is noted above.",
        "timeLimit": 5
    },
    {
        "instruction" : "Select the best word to complete the sentence.",
        "question": "The ant marched quickly back to ____ home.",
        "options": ["its", "it's", "their", "its'"],
        "correctAnswer": "its",
        "correctSentence" : "The ant marched quickly back to its home.",
        "explantion" : "In this case, the home belongs to the ant, so we need to express ownership. It’s is a contraction, while its expresses ownership.",
        "timeLimit": 6
    },
    {
        "instruction" : "Select the best word(s) for the blank in the following sentence.",
        "question": "First, he’s visiting London and then he _________ to Scotland.",
        "options": ["traveled", "would travel", "will be traveling", "has traveled"],
        "correctAnswer": "will be traveling",
        "correctSentence" : "First, he’s visiting London and then he will be traveling to Scotland.",
        "explantion" : "Since we’re talking about a future situation, our verb tenses must be in some form of the future tense (future simple, future progressive, etc).",
        "timeLimit": 5 
    }
]