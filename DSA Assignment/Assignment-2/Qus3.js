function findLHS(nums) {
    const frequency = new Map();
    let maxLength = 0;
    
    for (const num of nums) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
    
    for (const [num, count] of frequency) {
      const nextCount = frequency.get(num + 1);
      if (nextCount) {
        maxLength = Math.max(maxLength, count + nextCount);
      }
    }
    
    return maxLength;
}

let nums = [1,3,2,2,5,2,3,7]
let result = findLHS(nums)
console.log(result);
  