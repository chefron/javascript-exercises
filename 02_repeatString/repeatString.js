const repeatString = function(string, num) {
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
        repeatedString += string;
    }
    if (num < 0) {
        return "ERROR"
    } else { 
        return repeatedString;}
    
}

// Do not edit below this line
module.exports = repeatString;
