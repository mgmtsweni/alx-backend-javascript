class Utils {
	static calculateNumber(type, a, b) {
		const x = Math.round(a);
		const y = Math.round(b);
		let z = 0;
		switch (type) {
			case 'SUM':
				z = x + y;
				break;
			case 'SUBTRACT':
				z = x - y;
				break;
			case 'DIVIDE':
				if (y === 0) {
					z = "Error";
				} else {
					z = x / y;
				}
				break;
		}
		return z;
	}
}

module.exports = Utils;
