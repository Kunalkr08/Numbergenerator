document.getElementById("Q").onclick = function(){
  let count = 0;
  let max=document.getElementById("P").value ; 
  max = Number(max);

  const myTimer = setInterval(countUp, 200);
  function countUp(){
    count+=1;
    document.getElementById("R").innerHTML+=count + " ";
    if(count >= max){
        clearInterval(myTimer);
    }
  }
}
document.getElementById("S").onclick = function(){
    document.getElementById("R").innerHTML = " ";
}