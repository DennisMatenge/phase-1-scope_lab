// Write your solution in this file!

// Declare a global variable called customerName using the var keyword
var customerName;

// Write a function that accesses the global customerName variable, and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that declares a global variable called bestCustomer and assigns it a value
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function that overwrites the value of the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'definitely not bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it a value
const leastFavoriteCustomer = 'someone';

// Write a function that tries to change the value of the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will result in an error because we cannot reassign a constant.
}
