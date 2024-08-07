/********************************
 **** String Transformation *****
 ********************************/




// A function to Capitalizes the first letter of a string.

function capitalize(str) {
    if (typeof str !== 'string' || str === null || str === undefined) return "Input not a string";
    return str.length > 0 ? str[0].toUpperCase() + str.slice(1) : '';
}


capitalize('lol')


// A function to reverse a given string
function reverse(str){
    if(str === '') {
        return 'Empty string'
    }else if (typeof str !== 'string'){
        return 'Input not a string!'
    }

    let newStr = ''
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}



// A function to check if a given string is a Palindrome 
function isPalindrome(str) {

    if(str === '') {
        return 'Empty string'
    }else if (typeof str !== 'string'){
        return 'Input not a string!'
    }

    let newStr =''

    for(let i = str.length - 1; i >= 0 ; i--) {
        newStr += str[i]
    }

    return str === newStr;
}



//A function to count the words in a given string

function wordCount(str){
    if(str === '') {
        return 0
    }else if (typeof str !== 'string'){
        return 'Input not a string!'
    }
    return str.split(' ').length;
}




/********************************
 **** Array Transformation *****
 ********************************/


 //Double array elements
 function double(arr){

    if(arr.length<1){
        return 'Empty Array'
    }else if (!Array.isArray(arr)){
        return "Input not an array!"
    }
    
    return arr.map(el => el * 2)
 }

 //Filter Even numbers in a given array
 function filterEven (arr){
    if(arr.length<1){
        return 'Empty Array'
    }else if (!Array.isArray(arr)){
        return "Input not an array!"
    }
    return arr.filter(el => el % 2 === 0)
 }

 //A function to sum all the array elements (numbers)

 function sum(arr) {
    if (!Array.isArray(arr)) {
        return "Input not an array!";
    } else if (!arr.every(el => typeof el === 'number')) {
        return 'All elements must be numbers';
    }
    return arr.reduce((a, b) => a + b, 0);
}


  //A function to find the average of numbers in a given array
 function average(arr) {
    if (!Array.isArray(arr)) {
        return "Input not an array!";
    } else if (!arr.every(el => typeof el === 'number')) {
        return 'All elements must be numbers';
    }
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}


 console.log(average([1, 2]))



 /********************************
 **** Object Transformation *****
 ********************************/

//A function to return the fullname of a given object

function fullName (person){
    if(typeof person !== 'object'){
        return 'Input an object into function'
    }

    return `${person.firstName} ${person.lastName}`
 }


 //A function to check if an object passes as an adult
 function isAdult(person){
    if(typeof person !== 'object'){
        return 'Input an object into function'
    }

    return person.age > 17
 }


  //A function to filter out objects minimum age in array
 function filterByAge(people, minAge){
    return people.filter(el => el.age >= minAge)
 }

 console.log(filterByAge([{name: 'Prince', age: 20}, {name: "Kwaku", age: 50}], 40))



  /********************************
 ****  Function Composition *****
 ********************************/


//Combining one or more functions 

function compose(...args){
    return args[0](args[1](args[2]))
}


const composedFunctions = compose(reverse, capitalize, 'hello')

 console.log(composedFunctions)


 module.exports = {
    capitalize,
    reverse,
    isPalindrome,
    wordCount,
    double,
    filterEven,
    sum,
    average,
    fullName,
    isAdult,
    filterByAge,
    compose
 }