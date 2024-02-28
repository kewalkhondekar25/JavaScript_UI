//map, filter & reduce O/P based questions
//ques 2 - return only names of players who kill more than 3 enemy

let players = [
    {
        name: "jett",
        weapon: "vandal",
        kill: 5
    },
    {
        name: "pheonix",
        weapon: "bulldog",
        kill: 3
    },
    {
        name: "raze",
        weapon: "vandal",
        kill: 4
    },
    {
        name: "omen",
        weapon: "operator",
        kill: 2
    },
    {
        name: "cypher",
        weapon: "odin",
        kill: 2
    }
]

const killCount = players.filter((item) => {
    return item.kill >= 3;
});
console.log(killCount);

//ques 2 - return only names of players who kill more than 3 enemy & using weapon only vandal
const killCount2 = players.filter((item) => {
    return (item.kill >= 3 && item.weapon === "vandal");
});
console.log(killCount2);

//ques 2 - return sum of kills of all enemy
const killCount3 = players.reduce((acc, curVal) => {
    return acc + curVal.kill;
}, 0);
console.log(killCount3);
