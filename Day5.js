// Find and return prefix of its given strings of an array of an object.

strs = ['start', 'stair', 'step']

function getPrefix(strs) {
 if(!strs.length){
   return ""
 }
 for(let i = strs[0].length; i > 0 ; i--){
   let newString = strs[0].slice(0,i);
   let p = 0;
  // console.log(newString);
     for(let j = 1; j < strs.length; j++){

       //console.log(strs[j].slice(0,i));
       //console.log(strs.length);
         if(newString === strs[j].slice(0,i)){
           p++;
         }
         if(strs.length - 1 === p){
           return newString;
         }

     }


 }
 return ""
}
