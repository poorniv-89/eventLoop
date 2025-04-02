//Part 1: Stack Overflow
let counter = 0;

function incrementCounter() {
    counter++;
    console.log(counter);
    incrementCounter();
}
try {
    incrementCounter();
}
catch (error) {
    console.error(error);
    console.error("Counter value at the time of error:", counter);

}

//part2 Trampolines
const trampoline = (func, ...args) => {
    let result = func(...args);
    while (typeof result === "function") {
        result = result();
    }
    return result;
};

const flattenArray = (myArray) => {
    let result = [];


    const flatten = (arr) => {
        for (let item of arr) {
            if (Array.isArray(item)) {
                return () => flatten(item);
            } else {
                result.push(item);
            }
        }
        return result;
    };

    return flatten(myArray);
};

// Input array with deep nesting
const myArray = [4, [[3, [[2, [1, 2, 3, 4, 5]]]]]];

// Using the trampoline to safely execute the flatten function
console.log(trampoline(flattenArray, myArray)); 

//part3
let textContainer = document.getElementById('txt-container');

function calculatePrimeNumbers(n)
{
    for(let i =2; i< n; i++)
    {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break; 
            }
        }
        if (isPrime) {         
                textContainer.textContent += i + " "; 
        }
    }
    setTimeout(() => {
        alert("The calculation is finished.");
    }, 5000); 
}

calculatePrimeNumbers(10000);