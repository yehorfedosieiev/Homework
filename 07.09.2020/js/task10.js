alert("10.Найдите и исправьте ошибки в коде");

function foo(){
	function bar(a){
		let i = 3;
		return i + a;
	}
	
	for (let i = 0; i < 10; i++){
		console.log( bar(i * 2) );
	}
}

foo(); 
