
exports.min = function min (array) {
	if (array == undefined || array.length == 0) {
		return 0;
		} else {
			let minNum = array[0];
			for (let i = 0; i < array.length; i++) {
				if (array[i] < minNum) {
					minNum = array[i];
				}
			}
			return minNum;
		}
};

exports.max = function max (array) {
	if (array == undefined || array.length == 0) {
		return 0;
		} else {
			let maxNum = array[0];
			for (let i = 0; i < array.length; i++) {
				if (array[i] > maxNum) {
					maxNum = array[i];
				}
			}
			return maxNum;
		}
}

exports.avg = function avg (array) {
	let sum = 0;
	if (array == undefined || array.length == 0) {
		return 0;
		} else {
			let avgNum = array[0];
			for (let i = 0; i < array.length; i++) {
				sum += array[i];
				avgNum = sum / array.length;
			}
			return avgNum;
		}
}
