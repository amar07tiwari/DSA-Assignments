let nums = [2, 7, 11, 15];
let target = 9;

// First Approach :-
// function twoSum(array, target){
//     for(let i = 0; i < nums.length; i++){
//         target -= nums[i]
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[j] == target){
//                 return [i, j]
//             }
//         }
//     }
// }

// Second Approach:-
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(nums, target));
