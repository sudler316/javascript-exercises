const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisibleByFourHund = year % 400 === 0;


    if (
        (isDivisibleByFour) && (!isCentury || isDivisibleByFourHund)
    ) { 
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
