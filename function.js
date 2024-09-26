// function kaise create krte hai

function addNums(a, b) {
    var c = a + b;
    console.log(c);
}

addNums(34, 45)
addNums(34, 55)
addNums(34, 95)
addNums(34, 65)
addNums(34, 35)

// console.log(c);

// second method for function creating

// jab tak ham function me value return nhi krte toh result store nhi hota undefined hota hai

const getAvg = function( m1, m2, m3)
{
    var avg =( m1+m2+m3)/3;
    // console.log(avg);
    return avg;
}

const result1 = getAvg(4,9,5);
const result2 = getAvg(4,12,8);

console.log(result1);
console.log(result2);


// third method for creating function

const factorial = (n) => {
    let fact =1;

    for( let i=2; i<=n; i++)
        {
        fact = fact * i;
    }

    return fact;
}

const f1 = factorial(5);
console.log(f1);





