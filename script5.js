/* var dat=prompt(" date:");
var d=new Date(dat);
console.log(d); 
function myFunction() {
  var x = document.getElementById("myInput").value;
  document.getElementById("res").innerHTML = "You wrote: " + x;
}
function myFunction1() {
  var x = document.getElementById("myInput");
 document.getElementById("res2").innerHTML = x.value.toUpperCase();
}*/
var num=prompt("enter");
if(Number(num)>10 &&Number(num)<100)
{
	console.log('yes');
}
else
{
	alert("Error:number is not between 10 and 100");
}
var num1=0;
var num2=1;
var next;
var n=prompt("enter");
for(i=1;i<=n;i++)
{ 
	document.writeln(num1);
	next=num1+num2;
	num1=num2;
	num2=next;
    
}
