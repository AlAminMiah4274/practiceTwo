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
const stringVariable = `North South University, Micro Economics, Al Amin Miah`;
// console.log(stringVariable);

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

// extra
const twoParameter = (n1, n2) => {
    const add = n1 + 7;
    const add2 = n2 + 5;
    const result = add + add2;
    if (result % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(twoParameter(9, 6));

// checkList: 3.4 
const multiLine = (...numbers) => {
    const sum = numbers.reduce((sum, n) => sum + n);
    const result = Math.pow(sum, 2);
    return result;
};
// console.log(multiLine(4, 5, 2));

// sum all numbers of a array:
const numbs = [12, 48, 45, 78];
const sum = numbs.reduce((s, n) => s + n);
// console.log(sum);

// square & sum the all numbers:
const square = (numbers) => {
    const sum = numbers.reduce((sum, n) => sum + n);
    const result = Math.pow(sum, 2);
    return result;
}
const age = [4, 5, 2];
const result = square(age);
// console.log(result);

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
// console.log(institute);

const [, balance] = person.subjects;
// console.log(balance);