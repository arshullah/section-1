function isPerfectSquare(num) {
    if (num <= 0 || typeof num !== "number") {
        return false;
    }

    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt);
}

const number1 = 16;
const number2 = 9;
const number3 = 15;

console.log(`${number1} is perfect square:
 ${isPerfectSquare(number1)}`);
console.log(`${number2} is perfect square:
 ${isPerfectSquare(number2)}`);
console.log(`${number3} is perfect square:
 ${isPerfectSquare(number3)}`);





