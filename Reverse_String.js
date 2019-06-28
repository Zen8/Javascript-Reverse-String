// Few different ways to return a string in reverse
// for example rS('hello') === 'olleh'
// by using function funcName(){}

const output = rS('hello');
console.log(output);

// ES6 new For Loop syntax: for ... of
function rS(str) {
    let r = '';
    for (let char of str) {
        r = char + r;
    }
    return r;
}

// ES6 Arrow Function or "fat arrow" with split and reduce methods
// We split to transform string into an array
function rS(str) {
    return str.split('').reduce((r, char) => char + r, '');
}

// ES6 new way for splitting a string into an array with a Spread Operator [...] 
function rS(str) {
    return [...str].reverse().join('');
}

// ES6 using new method forEach and an Arrow Function
function rS(str) {
    let r = '';
    str.split('').forEach(char => r = char + r);
    return r;
}

// For Loop approach
function rS(str) {
    let r = '';
    for (var i = str.length - 1; i >= 0; i--) {
        r += str[i];
    }
    return r;
}

// Recursion way - removing the first character of the string by using substr() method
// then adding it to the end
function rS(str) {
    if (str === '') {
        return str
    } else {
        return rS(str.substr(1)) + str[0]
    }
}

// Another Recursion process plus using Ternary Operator
function rS(str) {
    return str ? rS(str.substr(1)) + str[0] : str
}

// Reverse method combined with split
function rS(str) {
    return str.split('').reverse().join('');
}

// Similar to above only written in separate rows for a clean look
function rS(str) {
    return str
        .split('')
        .reverse()
        .join('');
}