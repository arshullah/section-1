// print all even number from 100 to 200

for(let i=100; i<=200; i++){

    if(i%2===0){
        console.log(i);
    }
}

// prime or not prime check 

const num = 10;
let prime = true;

for(let i=2; i<num; i++){
    if(num % i ===0){

        console.log('not prime');
        prime =false;
        break;
    }
        
}
if(prime) console.log('prime');

//WAP to reverse a number

let n1 =826375;
let reverse = 0;

while (n1>0) {
    console.log(n1, reverse);
    const d =n1%10;
    reverse = reverse*10 +d;
    n1 =parseInt(n1/10);

    // parseInt decimal ko integer banata hai
 }
 console.log(n1, reverse);

 


