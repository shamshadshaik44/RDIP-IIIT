/*function multiply(a,b)
{
	return a*b;
}
 document.getElementById("result").innerHTML=multiply(5,6); */
/*var str="introP566";
var regex=/[a-z A-Z]/g;
var res=str.match(regex);
document.getElementById("result").innerHTML=res;
document.writeln(Math.pow(5,2));
document.writeln(Math.sqrt(256));
document.writeln(Math.abs(-35.27));
document.writeln(Math.ceil(35.17));
document.writeln(Math.floor(35.17));
document.writeln(Math.cos(30));
document.writeln(Math.sin(30));
document.writeln(Math.tan(30)); */
function validnum(phone,alertMsg){
	var num=/^[0-9]+$/;
	if(phone.value.match(num)){
		return true;
	}
	else{
		document.getElementById('phone').innerHTML=alertMsg;
		return false;
	}
	}

function validateForm()
{
	var x=document.forms["myfrom"]["reason"].value;
	if(x==""){
		alert("resaon must be filled out");
		return false;
	}
}



