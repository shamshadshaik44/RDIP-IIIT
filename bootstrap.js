/*$(document).ready(function()
{
	$("#show").click(function()
	{
		$("p").toggle();
	});
}); 
$(document).ready(function()
{
	$("button").click(function()
	{
	   $("#1").fadeToggle();
		$("#2").fadeToggle("slow");
	});
});
*/
$(document).ready(function(){
	$("#1").click(function(){
		$.get("https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
			function(data,status){
				alert("data:"+data+"\nstatus:"+status);
			});
			
	});
});
$(document).ready(function(){
	$("#2").click(function(){
		$.post("https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
		{
			name:"shamshad",
			branch:"EEE"

		},
		function(data,status){
			alert("data: "+data+"\nstatus:"+status);
		});
	});
});

