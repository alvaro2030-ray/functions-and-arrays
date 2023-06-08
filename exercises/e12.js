
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  var depositsList = [];
  var deposit = [];
  for (let i in array) {
    deposit = array[i].deposits;
   if(deposit > 100){
      depositsList.push(array[i].deposits); 
}
return depositsList
  }

}
import {bankAccounts} from '../data/data.js';
getAllDepositsGreaterThanOneHundred(bankAccounts)
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
