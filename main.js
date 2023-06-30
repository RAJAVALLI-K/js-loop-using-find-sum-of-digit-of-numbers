// 2-Program to find sum of digits of a given number

let num = parseInt(prompt("Enter a number:"));
let sum=0;
while (num != 0) {
    sum = sum + num % 10;
    num = parseInt(num / 10);
}
console.log("sum of digits:" + sum);