function distributeCandies(candyType) {
    const uniqueCandies = new Set();
    for (let i = 0; i < candyType.length; i++) {
      uniqueCandies.add(candyType[i]);
    }
    return Math.min(uniqueCandies.size, candyType.length / 2);
}
 
let candyType = [1, 1, 2, 2, 3, 3]
let result = distributeCandies(candyType)
console.log(result);