// Method 1: Using a loop with increment by 2
console.log("Method 1: Using a loop with increment by 2");
for (let num = 2; num <= 20; num += 2) {
    console.log(num);
}

console.log("\nMethod 2: Using if condition");
// Method 2: Using if condition
for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

console.log("\nMethod 3: Using filter");
// Method 3: Using filter with array
const evenNumbers = Array.from({length: 20}, (_, i) => i + 1)
    .filter(num => num % 2 === 0);
console.log(evenNumbers);
