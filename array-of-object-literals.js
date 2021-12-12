/*
    Given an array of patients, loop through them and produce another 2 sets of array:
    1. adultsWithFever:[]
    2. toddlersWithFever:[]

    The definition of fever is 38.0 and above.
    The definition of adult is 21 years old and above.
*/

const patients = [{
        name: "John",
        temperature: 38.6,
        age: 0
    },
    {
        name: "Derrick",
        temperature: 36.7,
        age: 34
    },
    {
        name: "Alex",
        temperature: 38.2,
        age: 2
    },
    {
        name: "June",
        temperature: 38.7,
        age: 31
    },
    {
        name: "Larry",
        temperature: 36.5,
        age: 23
    }
];


let adultsWithFever = [];
let toddlersWithFever = [];

adultsWithFever = patients.filter(patients => patients.temperature >= 38.00 && patients.age >= 21);

toddlersWithFever = patients.filter(patients => patients.temperature >= 38.00 && patients.age <= 20);

console.log("Ädult with fewer", adultsWithFever);
console.log("Toddler with fewer", toddlersWithFever);