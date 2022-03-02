// import functions
import { people } from './data.js';

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
    hobbies.innerHTML = '';
    container.classList.remove('Alonzo', 'Will');
    if (selectedName === 'one') {
        //come back and use javascript function for array position 0
        renderSelectedUserInfo(0);
    } else {
        //come back and use javascript function for array position 1
        renderSelectedUserInfo(1);
    }
});

function renderSelectedUserInfo(index) {
    container.classList.add(`${people[index].name}`);
    nameHeader.textContent = 'Name: ' + people[index].name;
    shortBio.textContent = 'Short Bio: ' + people[index].short_bio;
    age.textContent = 'Age: ' + people[index].age;
    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbies.appendChild(li); 
    }
}