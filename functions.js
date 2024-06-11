/********************************
 **** String Transformation *****
 ********************************/


// A function to Capitalizes the first letter of a string.
function capitalize (str ) {
    if(typeof str !== 'string') return "Input not a string"
    return str[0].toUpperCase() + str.slice(1);
}


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

console.log(reverse(8))

