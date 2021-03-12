module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.map((aBrackets)=>{
     return aBrackets.join("");
   })
   
   while(brackets.some((pairBrackets)=>{return str.includes(pairBrackets)})){
   brackets.forEach(item => {
   str=str.replace(item,"");
   });   
   }
   if(str.length == 0) {return true;}
   else {return false;}
 }