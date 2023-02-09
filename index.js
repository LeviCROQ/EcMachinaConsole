const prompt = require('prompt-sync')();

let rawInput;
let formattedInput;

const userList = []

while(formattedInput != 'EXIT') {
    rawInput = prompt('Enter a command: ');
    formattedInput = rawInput.toUpperCase();

    if (formattedInput == 'ADD') {

        console.log('You have selected to add a user to the list');

        if (userList.length == 0) {
            console.log('The list is currently empty')
        } else if (userList.length > 0) {
            console.log(`The list is as follows ${userList}`);
        }

        const newUser = prompt("Please enter a new user: ");

        userList.push(newUser);


    } else if (formattedInput == 'VIEW') {
        console.log('You have selected to view the list of users')
        
        for(let i = 0; i < userList.length; i++) {
            console.log(`User ${i+1}: ${userList[i]}`);
        }
    }
}