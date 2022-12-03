// checkList: 1
const person = {
    name: 'Al Amin Miah',
    study: 'Management',
    job: function () {
        return `He is studing at ${this.study}`;
    },
    subjects: ['Accounting', 'Micro Economics', 'Management', 'Marketing'],
    institute: {
        name: 'North South University',
        email: 'northsouthuniversity@gmail.com',
        location: 'Bashundhara'
    }
};

// console.log(person.job());

// checkList: 2
const stringVariable = ``;

// checkList: 3.1 
const returnNumber = () => {
    return 89;
}
// console.log(returnNumber());

// checkList: 3.2 
const divide = (num) => {
    return num / 17;
};
// console.log(divide(100));

// checkList: 3.3 
const add = (n1, n2) => {
    const sum = n1 + n2;
    const divide = sum / 2;
    return divide;
};
// console.log(add(4, 15));

// checkList: 3.4 
const multiLine = (n1, n2) => {
    const add = n1 + 7;
    const add2 = n2 + 7;
    const sum = add + add2;
    return sum;
};
// console.log(multiLine(10, 10));

// checkList: 4 
const numbers = [17, 82, 45, 78, 80, 97, 150];
const division = numbers.map(n => n / 7);
// console.log(division);

// checkList: 5
/*
gap(), forEach(), filter(), find() done.
*/

// checkList: 6 
const { institute } = person;
console.log(institute);