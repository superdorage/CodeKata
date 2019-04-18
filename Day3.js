// The function should return its longest length of its strings within a string object.

function getLengthOfStr(s) {
    let strArr = [];
    let prevStrArr = [];
    console.log(s)
    for (let i = 0; i < s.length; i++) {
      
      console.log('=======================', i);
      
        let ss = s.slice(i, i+1);
        console.log(' 검사 ss ==> ', ss);
        for (let j = 0; j < strArr.length; j++) {
            if (ss === strArr[j]) {
                
                if (prevStrArr.length < strArr.length) {
                    prevStrArr = strArr.slice();
                    console.log('prevStrArr에 저장', prevStrArr);
                }
                
                strArr = strArr.splice(j+1, strArr.length);
                console.log('자르고 다시 시작 strArr', strArr, j)
                             //splice arr 자르는 함수
                break;
            }
        }
        
        strArr.push(ss);
        console.log('추가한 후 strArr', strArr);
    }
    
    return Math.max(strArr.length, prevStrArr.length);
}

console.log(getLengthOfStr('taaaytts'));
