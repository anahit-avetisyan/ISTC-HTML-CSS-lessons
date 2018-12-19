//task 1. found not reapeted element
function repeated(param){
    var arr= param.split("")
    
  for(var i=0;i<arr.length;i++){
 var count=0;
 for(var j=0;j<arr.length;j++){
 if (arr[j]===arr[i]){
   count++;
}
}

   if(count===1)   {
    return   arr[i];
   
       break;
   }
   }
}
console.log(repeated('abacddbec'))