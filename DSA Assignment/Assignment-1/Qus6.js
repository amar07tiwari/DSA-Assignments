function containsDuplicate(nums){
    const uniqueSet = new Set()

    for (const num of nums) {
        if(uniqueSet.has(num)){
            return true
        }
        uniqueSet.add(num)
    }

    return false
}

let nums = [1, 2, 3, 1]
let result = containsDuplicate(nums)
console.log(result);