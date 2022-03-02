// import functions
import {people} from './data.js';

// grab DOM elements
const selectorElement = document.querySelector('.selector');
const container = document.querySelector('.container');
const nameHeader = document.querySelector('.name');
const shortBio = document.querySelector('.short-bio');
const age = document.querySelector('.age');
const hobbies = document.querySelector('.hobbies');

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
selectorElement.addEventListener('change', (event) => {
    const selectedName = event.target.value;
    
    if (selectedName === 'one') {
        //come back and use javascript function for array position 0
        console.log(selectedName);
    } else {
        //come back and use javascript function for array position 1
        console.log(selectedName);
    }
});