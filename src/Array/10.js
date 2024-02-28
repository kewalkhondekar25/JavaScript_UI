//map, filter & reduce O/P based questions

//ques 1 - return only names of student in capital 
let students = [
    {
        name:"harry potter",
        group: "godric gryffindor"
    },
    {
        name:"dracoy malfoy",
        group: "Salazar Slytherin"
    },
    {
        name:"luna lovegood",
        group: "Rowena Ravenclaw"
    },
    {
        name:"cedric diggory",
        group: "Helga Hufflepuff"
    }
];

//using for loop
let forLoopAns = [];
for(let i = 0; i < students.length; i++)
{
    forLoopAns.push(students[i].name.toUpperCase())
}
console.log(forLoopAns);

//using map
const mapAnswer = students.map(items => items.name.toUpperCase());
console.log(mapAnswer);

//using forEach
students.forEach(items => console.log(items.name.toUpperCase()));
