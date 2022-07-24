// 5. An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits. 
//     Determine if the input number is an Armstrong number. Return either true or false.
//     Ex: 1^3 + 5^3 + 3^3 = 153

const n = 153;
let copyn1 = n;
let copyn2 = n;
let sum=0;
let degree=0;
while(copyn1>0){
    degree++;
    copyn1 = parseInt(copyn1 / 10);
}

while(copyn2>0){
    let cifra = copyn2 % 10;
    sum += Math.pow(cifra, degree);
    copyn2 = parseInt(copyn2 / 10);
}
if(n==sum) console.log("True");
else console.log("False");