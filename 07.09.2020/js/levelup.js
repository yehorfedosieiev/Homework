alert("“История в картинках”. Создайте массив тематически связанных строковых картинок. Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из элементов массива (одну из картинок). Тема - свободная, ограничена только набором доступных строковых картинок.");

let arrPicture = [0x1F60B, 0x1F61B, 0x1F61C, 0x1F92A, 0x1F61D, 0x1F619, 0x1F61A, 0x1F970];
let i = 0;
let $divclass = $(".divclass");
let $h2 = $("<h2>").appendTo($divclass);

setInterval(function() {
	$h2.text(String.fromCodePoint(arrPicture[i]));
	i++;
	if (i === arrPicture.length) i = 0;
}, 1000);