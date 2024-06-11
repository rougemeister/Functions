/********************************
 **** String Transformation *****
 ********************************/


// A function to Capitalizes the first letter of a string.
function capitalize (str ) {
    if(typeof str !== 'string') return "Input not a string"
    return str[0].toUpperCase() + str.slice(1);
}


// A function to reverse a given string
function reverseString (str){

    let newStr = ''
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}

