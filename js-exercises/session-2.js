function Arraysoutput(str) {
    let output = [];
    let index = str.length - 1;
    let count = 1; 
    while (index >= 0) {
        let subArray = [];
        
        for (let i = 0; i < count && index >= 0; i++) {
            subArray.push(str[index]);
            index--;
        }
        output.unshift(subArray);
        count++;
    }

    return output;
}

const str = ["Pune", "Ahmedabad", "Rajkot", "Mumbai", "Delhi", "Kanpur"];
const output = Arraysoutput(str);

output.reverse();

console.log(output);
//-------------------------------

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let charMap = {};
    let left = 0; 
    let maxLength = 0; 

    
    for (let right = 0; right < n; right++) {
       
        if (charMap[s[right]] >= left) {
            left = charMap[s[right]] + 1;
        }
        
        charMap[s[right]] = right;
      
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));// output 3
console.log(lengthOfLongestSubstring('abcgfdhjbbd'))// Output: 8
console.log(lengthOfLongestSubstring('lalitpurpune'))

//--------------------------------------------------------------------------------
let arr = [1, 2, 4, 5, 6, 7, 9];

// Find even numbers
let evenNumbers = arr.filter(num => num % 2 === 0);

// Find odd numbers
let oddNumbers = arr.filter(num => num % 2 !== 0);

console.log("Even numbers:", evenNumbers); // Output: [2, 4, 6]
console.log("Odd numbers:", oddNumbers);   // Output: [1, 5, 7, 9]
