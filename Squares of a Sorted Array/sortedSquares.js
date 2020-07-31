const testCase = [-7,-3,2,3,11]

const sortedSquares = (nums) => {
    const squared = nums.map((n) => n*n)
    const sorted = squared.sort((a,b)=> a-b)
    return sorted
}

console.log(sortedSquares(testCase))