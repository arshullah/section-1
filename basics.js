//  program to add 2 numberr

const [n1, n2] = [3, 5];
const sum = n1 + n2;
console.log(sum);



// check even number

const n3 = 234;
if (n3 % 2 === 0) {
    console.log('even');

} else {
    console.log('odd');

}

// check positive negative and zero

const n4 =3455;

if (n4 > 0) {
    console.log('positive');
    
}
else if (n4 > 0) {
    console.log('negative');
    
}
else{
    console.log('zero');
    
}

// chk program is divisible by 7

const n5 = 35;

if (n5%7 === 0) {
    console.log('divisible');
    
}
else{
    console.log('not divisible');
    
}

// wap to check is person elgible to for Derive license

const age =23;

if (age>=18) {
     console.log('elegible');
     
    
}

else{
    console.log('not elegible');
    
}

// wap chk is divisible by 3 and 5

const m1 =20;

if (m1 % 3 === 0 && m1 % 5 === 0) {
    console.log('divisible by 3and 5'); 
}
else{
    console.log('not divisible by 3 and 5');
    
}


// Wap to check if a number is divisible by 7 or 11


const b1 =500;
if (b1 % 7 === 0 && b1 % 11 === 0) {
    console.log('divisible by 7 and 11');
    
}
else{
    console.log(' not divisible by 7 and 11');
    
}


// basic root nikalne ka tarika   console.log(25**0.5)
// console.log(Number.isInteger(7)); integer chk krne ka logic hai 

// Write a program check number is perfect square 

 const o1 = 45;

 const sqrt = o1 ** 0.5;

 console.log(sqrt);
 
 if (Number.isInteger(sqrt)) {
    console.log('perfect square ');
    
 }
 else{
    console.log('not perfect square ');
    
 }


//  loop
// let local banane ke liye laagte hai

for(let i=1; i<=1000; i++){
    console.log(i);
    
}

// write a program all number divisible by 7 between 50 to 200

for (let num = 50; num <=200; num++){

    if (num % 7 === 0) {
    console.log(num);
    
    } 
    
}
    

 

