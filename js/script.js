let money,
	name,
	time,
	price;

function start() {
	money = prompt("Ваш бюджет?");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?");
	}

	name = prompt("Название Вашего магазина?").toUpperCase();
	time = 21;
	price = 100;
}

start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: {},
	employers: {},
	open: false,
	discountStatus: true
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a) === 'string' && (typeof(a)) != null && a != '')) {
			console.log('Всё верно');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
}

// chooseGoods();

function workTime(time) {
	if (time < 0) {
		consile.log('Такого быть не может!');
		} else if (time > 8 && time < 20) {
			console.log("Времф поработать");
			} else if (time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
					}
}

// console.log(workTime(18));

function dayBudget(money) {
	return money / 30;
}

// console.log(dayBudget(mainList.budget));

function discount(status, price, sale) {
	if (status === true) {
		var newPrice = price * sale / 100;
		return newPrice; 
	} else {
		return price;
	}
}

// console.log(discount(mainList.discountStatus, price, 80));

function employers(num) {
	var employers = [];
	for (var i = 0; i < num; i++) {
		name = prompt('Введите Ваше имя', '');
		tel = prompt('Введите Ваш номер телефона', '');
		employers[i] = [tel, name];
	}
	return employers;
}

var res = employers(4);
console.log(res);


console.log(mainList);












