function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming"));

//Find Even Numbers in an Array
function findEvenNumbers(numbers) {
  const evenNumbers = [];

  for (const num of numbers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }

  return evenNumbers;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));


// Find the Factorial of a Number
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i; 
  }

  return result;
}

console.log(factorial(5));

// PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();

//Check for Palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("hello"));  // false

