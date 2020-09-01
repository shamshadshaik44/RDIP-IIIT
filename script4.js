/*function multiply(a,b)
{
	return a*b;
}
 document.getElementById("result").innerHTML=multiply(5,6); */
var str="introP566";
var regex=/[a-z A-Z]/g;
var res=str.match(regex);
document.getElementById("result").innerHTML=res;
