function removeElement(nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

let nums = [2, 3, 3, 2];
let val = 3;
let result = removeElement(nums, val);
console.log(result);
console.log(nums);
