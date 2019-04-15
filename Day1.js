// The 'twoSum()' function should recieve a sequence of numbers as a first parameter, the sum of two numbers within the said sequence as the second parameter('target'). And the funciton should return its 'index' numbers. 

let a = [4, 9, 11, 14];

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length + 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i ,j];
      }
    }
  }
}

twoSum(a, 13);
