// Cau 1: kiem tra so nguyen to
function isPrime(num){
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i*i <= num; i+= 2){
        if (num % i === 0) return false;
    }
    return true;
}

// Cau 2: tinh tong so le tu 1 den n
function sumOdd(num){
    let sum = 0;
    for (let i = 1; i <= num; i += 2){
        sum += i;
    }
    return sum;
}

// Cau 3: 
let input = prompt("Number array (seperated by comma): ");
let arr = input.split(",").map(Number);
console.log(arr);


let evenArr = arr.filter(num => num % 2 === 0);
console.log("Even numbers: ");
evenArr.forEach(num => console.log(num))

let max = Math.max(...arr);
console.log("Max number: ", max);

let newArr = arr.filter(num => num > 0);
console.log("Array with elements larger than 0: ");

console.log(newArr);

