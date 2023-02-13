
// function greetTheStudent(studentName){
//     return `Hello there ${studentName}`;
// }

// const greet = greetTheStudent(student);
// console.log(greet);

const greetTheStudent = studentName => `Hello there ${studentName}`;

// const student = 'Mary Jane';
// const greet = greetTheStudent(student);
// console.log(greet);

const fullName = (firstName, middleName, lastName) => `${lastName}, ${firstName} ${middleName}.`

const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);