//map, filter & reduce O/P based questions
//ques 2 - return only names of students who score less than 60 marks

let Students = [
    {
        name: "mark",
        tech: "react",
        score: 99
    },
    {
        name: "larry",
        tech: "angular",
        score: 90
    },
    {
        name: "john",
        tech: "nodejs",
        score: 89
    },
    {
        name: "henry",
        tech: "php",
        score: 69
    },
    {
        name: "albert",
        tech: "java",
        score: 59
    },
    {
        name: "james",
        tech: "css",
        score: 40
    },
    {
        name: "william",
        tech: "vue",
        score: 49
    }
]

const result = Students.filter((item) => {
    return item.score <= 60;
}).map((item) => {
    return item.name;
});
console.log(result);