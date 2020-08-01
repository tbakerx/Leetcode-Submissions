const testCaseArray = [2, 3, 5]
const testCaseTarget = 8

const combinationSum = (candidates, target) => {
  const temp = []
  const result = []
  let index = 0
  let sum = 0

  const backTrack = (temp, sum, index) => {
    if (sum > target) return
    if (sum === target) {
      result.push([...temp])
      return
    }
    for (let i = index; i < candidates.length; i++) {
      temp.push(candidates[i])
      backTrack(temp, sum + candidates[i], i)
      temp.pop()
    }
  }

  backTrack(temp, sum, index)
  return result
}

console.log(combinationSum(testCaseArray, testCaseTarget))
