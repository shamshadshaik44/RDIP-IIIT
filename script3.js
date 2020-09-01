document.getElementById('info').innerHTML="";
var tab=document.getElementById("tbl");
var sum=0;
for(var i=0;i<tab.rows.length;i++)
{
	var objCells=tab.rows.item(i).cells;
	for(var j=1;j<objCells.length;j++)
	{
           sum=sum+Number(objCells.item(j).innerHTML);
	}
}
var avg=sum/tab.rows.length;
var row=tab.insertRow(3);
var cell1=row.insertCell(0);
var cell2=row.insertCell(1);
cell2.innerHTML="Total Marks=" +sum+"<br>"+"Avg="+avg;


