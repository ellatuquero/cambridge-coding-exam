
export type CourseTypes = {
    courseName: string;
    description: string;
    recommendedType?: string;
}

export const CourseList : CourseTypes[] = [
    {
        courseName : "B2",
        description : "First",
        recommendedType : "Low"
    },
    {
        courseName : "C1",
        description : "Advanced",
        recommendedType : "Low"
    },
    {
        courseName : "B2",
        description : "First for Schools",
        recommendedType : "Average"
    },
    {
        courseName : "B1",
        description : "Preliminary for Schools",
        recommendedType : "High"
    },
    {
        courseName : "A2",
        description : "Key for Schools",
        recommendedType : "High"
    }
];