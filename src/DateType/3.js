let date = new Date();
let week = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
let month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

console.log(`today is ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} ${week[date.getDay()]}`);

