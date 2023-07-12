function minimumScore(nums, k) {
    const maxVal = Math.max(...nums);
    const minVal = Math.min(...nums);
    const initialScore = maxVal - minVal;
  
    if (initialScore <= 2 * k) {
      return initialScore;
    }
  
    const newScore1 = initialScore - 2 * k;
    const newScore2 = initialScore - 2 * k;
  
    return Math.min(newScore1, newScore2);
}

let nums = [1], k = 0
let result = minimumScore(nums, k)
console.log(result);
  