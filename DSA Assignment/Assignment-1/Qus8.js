function findErrorNums(nums) {
    const numSet = new Set();
    let duplicate = 0;
    let missing = 0;
    let totalSum = (nums.length * (nums.length + 1)) / 2;
    let arraySum = 0;
  
    for (let num of nums) {
      if (numSet.has(num)) {
        duplicate = num;
      }
      numSet.add(num);
      arraySum += num;
    }
  
    missing = totalSum - arraySum + duplicate;
  
    return [duplicate, missing];
}
  

const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result);

  