// schema - строгая схема
// по схеме определяется сколько вложенностей будет парситься
// ключ в схеме === поле type в дереве
// genId - метод который формирует ключ ноды
// в зависимости от его местоположения
// toYaml TODO
// fromYaml TODO
// getDiff - вернет объект в котором будут
// перечисленны измененные ноды
// и тип действия который к ним применен

const testSchema = {
	block: {
		childs: {
			video: {
				src: {
					type: String,
					default: "some/path"
				}
			},
			_other: {
				someVal: 123
			},
			_extend: {
				dateCreate: {
					type: String,
					default: new Date()
				}
			}
		}
	}
};

class MbTree {
	constructor({ initial }) {
		this.tree = initial;
		this.diffs = {};
	}
	_getLink() {}
	walk() {
		
	}
	add(path, data) {}
}
