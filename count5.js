//Count Vowels in a String

const vawels = ["a", "e", "i", "o", "u"]
function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);

letters.forEach(function(vawel){
  if(vawels.includes(vawel)){
    count++;
  }
})
  return count;
}

console.log(countVowels("programming"));



//Find Even Numbers in an Array
function findEvenNumbers(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens = [...evens, arr[i]];
    }
  }

  return evens;
}


const numbers = [1, 2, 3, 4, 5, 6];
console.log(findEvenNumbers(numbers));


// Find the Factorial of a Number
function findFactorial(n) {
  let answer = 1;

  for (let i = 1; i <= n; i++) {
    answer *= i; 
  }

  return answer;
}

console.log(findFactorial(5)); 



// PingPong Challenge 
function pingPong() {
  let i = 1;

  while (i <= 20) {
    let result = "";

    if (i % 3 === 0) result += "Ping";
    if (i % 5 === 0) result += "Pong";

    console.log(result || i); 
    i++;
  }
}

pingPong();


//Check for Palindrome
function checkPalindrome(text) {
  let reversedText = "";

  
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }

  if (text === reversedText) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("madam"));  
console.log(checkPalindrome("hello"));  

