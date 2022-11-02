const sumAll = function(int1, int2) {
    let sumAllInts = 0;
    if (typeof int1 !== 'number' || typeof int2 !== 'number'){
        sumAllInts = "ERROR";
    } else if (int1 < 0 || int2 < 0){
        sumAllInts = "ERROR";
    } else if (int1 < int2){
        for (let i = int1; i <= int2; i++){
            sumAllInts += parseInt(i);}
    } else if (int1 > int2){
        for (let i = int2; i <= int1; i++){
            sumAllInts += parseInt(i);}
    }
    return sumAllInts;
    };

// Do not edit below this line
module.exports = sumAll;
