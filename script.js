let name = "Nargis";
alert(`Welcome Miss ${name}`);

let isIntern = true;

if (isIntern) {
    alert("You are an Intern at Vantage Soft");
} else {
    alert("You are not an Intern at Vantage Soft");
}

const greet=()=> {
    alert("Welcome to Vantage Soft");
};
greet();
const showMessage=() =>{
    let message = document.getElementById("message");

    if (message.innerHTML === "") {
        message.innerHTML = "I recently complete my bachelor in computer science and now i am frontend developer in vantage soft";
    } else {
        message.innerHTML = "";
    };
    let skills = ["HTML", "CSS", "JavaScript"];

 console.log(skills[0]);
let student = {
    name: "Nargis",
    university: "Fazaia"
};

console.log(student.name);
}
const student = {
    name: "Nargis",
    university: "Fazaia"
};

//  Practice:destruturing,spread and rest operators,defualt para..

const studentInfo = {
    studentName: "Nargis",
    university: "Fazaia"
};

const { studentName, university } = studentInfo;

console.log(studentName);
console.log(university);

const skillsList = ["HTML", "CSS"];
const updatedSkills = [...skillsList, "JavaScript"];

console.log(updatedSkills);


const showSkills = (...skills) => {
    console.log(skills);
};

showSkills("HTML", "CSS", "JavaScript");


const greetUser = (user = "Guest") => {
    console.log(`Welcome ${user}`);
};

greetUser();
greetUser("Nargis");

// array method.....

// fE
const skillsDay3 = ["HTML", "CSS", "JavaScript"];

skillsDay3.forEach(skill => {
    console.log(skill);
});

// M
const numbersDay3 = [1, 2, 3, 4];

const doubledNumbers = numbersDay3.map(num => num * 2);

console.log(doubledNumbers);

// F
const agesDay3 = [15, 18, 22, 12, 30];

const adults = agesDay3.filter(age => age >= 18);

console.log(adults);

// R
const marksDay3 = [10, 20, 30, 40];

const totalMarks = marksDay3.reduce((sum, mark) => sum + mark, 0);

console.log(totalMarks);