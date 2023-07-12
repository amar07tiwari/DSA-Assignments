function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    
    for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0) {
        const prev = i === 0 ? 0 : flowerbed[i - 1];
        const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
        
        if (prev === 0 && next === 0) {
          flowerbed[i] = 1;
          count++;
        }
      }
    }
    
    return count >= n;
}

let flowerbed = [1,0,0,0,1], n = 1
let result = canPlaceFlowers(flowerbed, n)
console.log(result);
  