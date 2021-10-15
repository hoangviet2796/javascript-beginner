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

