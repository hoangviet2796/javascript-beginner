// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:
function highAndLow(str) {
    let arr = str.split(" ")
    let max = Number(arr[0])
    let min = Number(arr[0])
    for(let i = 1; i < arr.length; i++) {
        if(Number(arr[i]) > max)
            max = Number(arr[i])
        else if (Number(arr[i]) < min)
            min = Number(arr[i])
    }
    return max.toString() + " " + min.toString()
}


highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

//------------------------------------------------------------

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function sortNumber(num) {
    let arr = num.toString().split("").sort().reverse()
    return Number(arr.join(""))
}

// Write a function mostLetterWord that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.

function mostLetterWord(str, char) {
    let arr = str.split(" ")
    let n = arr.length
    let max = 0;
    let index;
    for (let i = 0; i < n; i++) {
        let smallArr = arr[i].split("")
        let count = 0;       
        for (let j = 0; j < smallArr.length; j++) {
            if(smallArr[j] == char)
                count++
        }
        if (count > max) {
            max = count
            index = i
        }  
    }
    return arr[index]
}

console.log(mostLetterWord('she received an award for excellence in science', 'e')); // 'excellence'
console.log(mostLetterWord('she received an award for excellence in science', 'a')); // 'award'
console.log(mostLetterWord('I hope sophomore year comes soon', 'o')); // 'sophomore'
console.log(mostLetterWord('I hope sophomore year comes soon', 's')); // 'sophomore'
