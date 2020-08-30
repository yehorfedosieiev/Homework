// alert('Найдите и исправьте ошибки в коде');

// for (let i = 0; i < 10; i++) {
// 	for (let j = 0; j < 10; j++) {
// 		console.log(i + j);
// 	}
// }

// alert('Во втором цикле i необходимо заменить на j, т.к. внутренний цикл был бесконечным.');

let $div = $('div.divclass');

let $table = $('<table></table>');
$table.appendTo($div);
$table.css({"border-spacing":"0px","margin":"auto"});


for (let i = 1; i <=20; i++){
	var $tr = $('<tr></tr>');
	$tr.appendTo($table);

	// как вариант назначить значения цвета сразу при создании
	if (i <= 6) $('tr:nth-child(' + i + ")").css({"background":"#106b63"});
	else if (i <=9) $('tr:nth-child(' + i + ")").css({"background":"#E7C610"});
	else if (i <= 12) $('tr:nth-child(' + i + ")").css({"background":"#C64A08"});
	else if (i <= 15) $('tr:nth-child(' + i + ")").css({"background":"#B43100"});
	else $('tr:nth-child(' + i + ")").css({"background":"#102173"});

	for (let j = 1; j<=5; j++){
		var $td = $('<td></td>');
		$td.appendTo($tr);
		$td.css({"border":"1px solid #000", "width":"10px", "height":"10px"});
	}
}

// let $numberTr = $('tr');
// for(let i = 1; i<= $numberTr.length; i++){
// 	if (i <= 6) $('tr:nth-child(' + i + ")").css({"background":"#106b63"});
// 	else if (i <=9) $('tr:nth-child(' + i + ")").css({"background":"#E7C610"});
// 	else if (i <= 12) $('tr:nth-child(' + i + ")").css({"background":"#C64A08"});
// 	else if (i <= 15) $('tr:nth-child(' + i + ")").css({"background":"#B43100"});
// 	else $('tr:nth-child(' + i + ")").css({"background":"#102173"});
// }

let $numberTd = $("div.divclass td");
for (let i = 0; i < $numberTd.length; i++){
	if (i%2 !== 0) $("div.divclass td:eq(" + i + ")").addClass("none");
}

$("div.divclass td.none").css({"background-color":"#fff", "border":"none"})