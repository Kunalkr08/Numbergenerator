
document.getElementById("Q").onclick = function(){
  let count = 0;
  let max=document.getElementById("P").value ; 
  let p=max;
  max = Number(max);
    if(max>=1 && max<=500){
  const myTimer = setInterval(countUp, 10);
  function countUp(){
    count+=1;
    document.getElementById("R").innerHTML+=count + " ";
    if(count >= max){
        clearInterval(myTimer);
    }
  }
}
else{
  document.getElementById("R").innerHTML ="Please enter value greater then 0 and less than 501";
}
}
document.getElementById("S").onclick = function(){
    document.getElementById("R").innerHTML = " ";
}