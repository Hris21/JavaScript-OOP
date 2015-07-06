/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(arr) {
    var result = 0;

    arr.map(Number).forEach(function (element) {
        if (isNaN(element)) {
            throw new Error('An element in the Array is not Convertible to number');
        }
    }, this);
    if (arr.length === 0) {
        return null;
    }
    if (arguments.length === 0) {
        throw new Error('The function has no arguments.');
    }

    arr.map(function (number) {
        result += number | 0;
    })

    return result;
}

module.exports = sum;
