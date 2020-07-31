const testCase = [12,345,2,6,7896]

const evenNumDigits = (nums) => {
    let count = 0
    nums.forEach(element => {
        let digits = 0
        if(element >=1) ++digits
        while(element/10>=1) {
            element/=10
            ++digits
        }
        if(digits%2===0) count++
    })
    return count
}

console.log(evenNumDigits(testCase))