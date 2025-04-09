const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
      }
// create an empty array
    const list = []
    // defining the start and end of the array
    for (let i = min; i <= max; i++) {
        list.push(i)}
// adding the items together and assigning result to sum
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
return sum
    
};

// Do not edit below this line
module.exports = sumAll;
