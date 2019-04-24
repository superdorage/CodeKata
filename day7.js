* 문제
숫자로 이루어진 배열인 nums를 인자로 전달합니다.
숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.

예를 들어,

nums = [3,2,3]
return 3

nums = [2,2,1,1,1,2,2]
return 2


* 가정
nums 배열의 길이는 무조건 2개 이상


function moreThanHalf(nums) {
  let result;
  
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    
    for (let j = 0; j < nums.length; j++ ) {
      if (nums[i] === nums[j]) {
        sum += 1;
      }
    }
    
    if (sum > nums.length/2) {
      return nums[i];
    }
  }
}

// or

// function moreThanHalf(nums) {
//   let obj = {};
//   let key = '';
//   let count = nums.length/2;
  
//   for (let i = 0; i < nums.length; i++) {
//       let thisNum = nums[i];
      
//       if (obj[thisNum]) {
//           obj[thisNum]++;
//       } else {
//           obj[thisNum] = 1;
//       }
      
//       if (obj[thisNum] > count) {
//           key = thisNum;
//           break;
//       }
//   }    
  
//   return Number(key);
// }

