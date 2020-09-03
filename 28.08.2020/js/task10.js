let $table = $('#root table');
$table.css({"border-spacing":"0px","margin":"auto"});

let $tr = $('#root table tr');
for (i = 1; i <=  $tr.length; i++){
	if (i <= 6) $('#root table tr:nth-child(' + i + ")").css({"background":"#106b63"});
	else if (i <=9) $('#root table tr:nth-child(' + i + ")").css({"background":"#E7C610"});
	else if (i <= 12) $('#root table tr:nth-child(' + i + ")").css({"background":"#C64A08"});
	else if (i <= 15) $('#root table tr:nth-child(' + i + ")").css({"background":"#B43100"});
	else $('#root table tr:nth-child(' + i + ")").css({"background":"#102173"});
}

let $td= $('#root table td');
$td.css({"border":"1px solid #000", "width":"10px", "height":"10px"});

$('#root table td.none').css({"background-color":"#fff", "border":"none"})
