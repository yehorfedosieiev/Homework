'use strict';

// В прототипном стиле напишите класс Warrior для создания игроков “файтинга”. Игроки должны иметь свойство health - которое
// определяет базовые боевые возможности игрока (выносливость), и power - сила удара. Оба свойства определяются при создании
// экземпляра класса. Также игрок должен иметь метод hit для нанесения удара другому игроку. При нанесении удара “жертва” теряет
// энергии (health) соответственно значению power игрока, который наносит удар. Также все игроки имеют возможность лечиться - метод heal.
// Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
// Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями. И напишите пример боя, используя
// соответствующие методы и свойства.

alert("Бой!!!");

function Warrior(health, power) {
	this.health = health;
	this.power = power;
	this.statusAlive = true;
	this.abitlityToHeal = 2;
};

Warrior.prototype.hit = function(player){
	if (this.statusAlive === true && player.statusAlive === true){
		player.health = player.health - this.power;
		console.log(`Игрок ${this.name} нанес ${this.power} урона игроку ${player.name}`);
		console.log(`У игрока ${this.name} ${this.health} жизней`);
		console.log(`У игрока ${player.name} ${player.health} жизней`);
		if (player.health <= 0){
			console.log(`Игрок ${player.name} убит`);
			player.statusAlive = false;
		}
	}
	else if (this.statusAlive === false) console.log(`Игрок ${this.name} мертв`);
	else console.log(`Игрок ${player.name} мертв`);
}

Warrior.prototype.heal = function(){
	if (this.statusAlive){
		if (this.abitlityToHeal > 0){
			this.health +=100;
			console.log(`После лечения, здоровье игрока ${this.name} составляет: `, this.health);
			this.abitlityToHeal--;
		} else{
			console.log("Нельзя применить лечение, т.к. нет маны");
		}
	} else console.log(`Лечение уже не поможет игроку ${this.name}`);
};

Warrior.prototype.ultimate = function (){
	if (this.statusAlive){
		if (Math.random() < 0.5) {
			this.power = this.power + 400;
			console.log(`Игрок ${this.name} применил ултимейт и теперь его сила равна ${this.power}`);
		}
		else console.log(`Не удалось применить ультимейт`);
	} else console.log (`Игроку ${this.name} поздно пить Боржоми!!!`);
}

function David(health, power) {
	this.name = "David";
	
	Warrior.call(this, health, power);
}
Object.setPrototypeOf(David.prototype, Warrior.prototype);

function Goliath(health, power) {
	this.name = "Goliath";
	
	Warrior.call(this, health, power);
}
Object.setPrototypeOf(Goliath.prototype, Warrior.prototype);

Goliath.prototype.ultimate = function(){
	if (this.statusAlive){
		if (Math.random() >= 0.5) {
			this.health = this.health + 400;
			console.log(`Игрок ${this.name} применил ултимейт и теперь его уровень жизни равен ${this.health}`);
		} else console.log(`Не удалось применить ультимейт`);
	} else console.log (`Игроку ${this.name} поздно пить Боржоми!!!`);

}

let Dav = new David(500, 100);
let Gol = new Goliath(1000, 300)

Dav.hit(Gol);
Gol.heal();
Gol.hit(Dav);
Dav.heal();
Dav.ultimate();
Dav.hit(Gol);
Gol.heal();
Gol.ultimate();
Gol.hit(Dav);
Dav.heal();
Dav.hit(Gol);
Dav.hit(Gol);
Gol.heal();
Gol.heal();
Dav.heal();
Gol.hit(Dav);