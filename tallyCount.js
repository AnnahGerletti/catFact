var goodclick = 0;
function tallyCountGood(){
  console.log("cone on");
  goodclick +=1;
  document.getElementById("goodtotal").innerText=goodclick;
  newCatFact();

}

var badclick = 0;
function tallyCountBad(){
  console.log("dfasdf");
  badclick +=1;
  document.getElementById("badtotal").innerText=badclick;
  newCatFact();
}
