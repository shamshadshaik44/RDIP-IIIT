/* var dat=prompt(" date:");
var d=new Date(dat);
console.log(d); */
function myFunction() {
  var x = document.getElementById("myInput").value;
  document.getElementById("res").innerHTML = "You wrote: " + x;
}
function myFunction1() {
  var x = document.getElementById("myInput");
 document.getElementById("res2").innerHTML = x.value.toUpperCase();
}