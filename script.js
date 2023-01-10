function tribonacci(array, n) {
    let tribonacciArray1 = [];
    let tribonacciArray2 = [];
    let finishedTribonacciArray = [];
    if (array === 0) {
        return finishedTribonacciArray;
    }
    for (let i = 3; i <= n; i++) {
        array[i] = array[i - 1] + array[i - 2] + array[i - 3];
        tribonacciArray1.push(array[i]);
    }
    for (let j = 0; j < 2; j++) {
        tribonacciArray2.push(array[j]);
    }

    return finishedTribonacciArray = tribonacciArray2.concat(tribonacciArray1);
}

let test = tribonacci([1, 1, 1], 10)
console.log(test);