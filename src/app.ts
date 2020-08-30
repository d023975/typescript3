// console.log('your code goes here .....!');

// const add = (a: number, b: number = 5) => {
//   return a + b;
// };
// console.log(add(22));

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const activeHobbies = ['Hiking', ...hobbies];


console.log(activeHobbies);

const person = {
  name1: 'max',
  age: 30,
};

const {name1:userName, age} = person;

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curres, curval) => {
    return curres + curval;
  }, 0);
};

const addedNumbers = add(2, 343, 4, 3, 3, 43, 3);
console.log(addedNumbers);




