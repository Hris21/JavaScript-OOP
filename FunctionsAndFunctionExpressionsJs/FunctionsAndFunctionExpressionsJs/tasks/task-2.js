/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/


function findPrimes(start, end) {
    var index,
        currentElement,
        primeIndex,

        primes = [];

    start = parseInt(start);
    end = parseInt(end);

    function isPrime(number) {
        if (number === 0 || number === 1) {
            return false;
        }
        for (primeIndex = 2; primeIndex < number; primeIndex += 1) {

            if (number % primeIndex === 0) {
                return false;
            }
        }
        return true;
    }
    for (index = start; index <= end; index += 1) {
        currentElement = index | 0;
        if (isPrime(currentElement)) {
            primes.push((currentElement));
        }
    }

    //Validations below . 

    if (arguments.length === 0 || arguments.length === 1) {
        throw new Error('One or more arguments are missing.');
    }
    if (isNaN(end) || isNaN(start)) {
        throw new Error('One of the range params is not a number.')
    }
    return primes;
}


module.exports = findPrimes;
