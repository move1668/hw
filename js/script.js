let money,
	name,
	time,
	price;

time = 21;
price = 100;

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: {},
	shopItems: [],
	employers: {},
	open: false,
	discountStatus: false,

	start: function start() {
		while (isNaN(money) || money == "" || money == null) {
			money = prompt("Ваш бюджет?");
		}
		mainList.budget = money;
		mainList.shopName = prompt("Название Вашего магазина?").toUpperCase();
	},
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 3; ) {
			let a = prompt("Какой тип товаров будем продавать?");

			if ((typeof(a) === 'string' && (typeof(a)) != null && a != '')) {
				console.log('Всё верно');
				mainList.shopGoods[i] = a;
				i++
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			consile.log('Такого быть не может!');
			} else if (time > 8 && time < 20) {
				console.log("Времф поработать");
				mainList.open = true;
				} else if (time < 24) {
					console.log('Уже слишком поздно!');
					} else {
						console.log('В сутках только 24 часа!');
						}
	},
	dayBudget: function dayBudget(money) {
		return money / 30;
	},
	discount: function discount(status, price, sale) {
		if (status === true) {
			var newPrice = price * sale / 100;
			return newPrice; 
		} else {
			return price;
		}
	},
	getEmployers: function getEmployers(num) {
		var employers = [];
		for (var i = 0; i < num; i++) {
			name = prompt('Введите Ваше имя', '');
			tel = prompt('Введите Ваш номер телефона', '');
			employers[i] = [tel, name];
		}
		return employers;
	},
	chooseShopItems: function chooseShopItems() {
		let items;

		do {
			items = prompt('Перечислите через зяпятую товары', '');
		} while (typeof(items) !== 'string' || items == null || items == '');

		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();
		
		return true;
	},
	viewShopItems: function viewShopItems() {
		mainList.shopItems.forEach(function(item, i, arr) {
			console.log((i + 1) + ': ' + item + ' из массива: ' + arr + '.');
		});
	}
}

for (let key in mainList) {
	console.log('Наш магазин вклячает в себя: ' + key + ': ' + mainList[key]);
}

// console.log(mainList);


