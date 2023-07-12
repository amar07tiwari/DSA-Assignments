function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + (high - low) / 2;

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid + 1;
    }
  }

  return low;
}

let nums = [1, 3, 5, 6];
let target = 5;
let result = binarySearch(nums, target);
console.log(result);
