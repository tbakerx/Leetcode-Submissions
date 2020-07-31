const testCase = [1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0]

const maxConsecutiveOnes = (nums) => {
    let currOnes = 0
    let maxOnes = 0 
    if (nums.length === 0) return 0
    nums.forEach(element => {
        if(element===1){
            currOnes++
            if(currOnes > maxOnes) maxOnes = currOnes
        } else {
            currOnes = 0
        }
    })
    return maxOnes
}

console.log(maxConsecutiveOnes(testCase))