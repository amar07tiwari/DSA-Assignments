function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;
    
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        increasing = false;
      }
      
      if (nums[i] > nums[i - 1]) {
        decreasing = false;
      }
      
      if (!increasing && !decreasing) {
        return false;
      }
    }
    
    return true;
}

let nums = [1,2,2,3]
let result = isMonotonic(nums)
console.log(result);
  