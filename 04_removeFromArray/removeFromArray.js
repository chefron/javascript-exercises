const removeFromArray = function(args, ...argToRemove) {
    args = args.filter(item => !argToRemove.includes(item));
    console.log(args);
    console.log(argToRemove);
    return args;

     
    
    
 }

//


    

// Do not edit below this line
module.exports = removeFromArray;
