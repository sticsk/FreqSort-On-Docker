import React, { useRef, useEffect } from "react";

const Canvas = () => {
	const arr = [];
	var sorted = [5, 10, 45, 58 ,52];
	var k = 1;
	if (sorted.length > 1) {
		var sum = 0;

		for (let t = 0; t < sorted.length; t++) {
			var sum = 0;
			for (let l = 0; l < sorted.length; l++) {
				var sumt = 0;
				if (k == 1) {
					for (let i = 0; i < sorted.length; i++) {}

					// if (sorted[l] == sorted[t]) {
					// 	sum = sum
					// } else {
					// 	sum += sorted[l];
					// }
				}
			}
			console.log(sum);
		}
	}
	const powerset = (arr) => arr.reduce((a, v) => a.concat(a.map((r) => [v].concat(r))), [[]]);
	var interm = powerset(sorted).filter((x) => x.length > 1);

	interm = [...new Set(interm)];

	for (var i = 0; i < interm.length; i++) {
		var sum = 0;
		for (var j = 0; j < interm[i].length; j++) {
			sum += interm[i][j];
		}
		arr.push(sum);
	}

	var test = [...new Set(arr)];
	console.log(interm);
	return <div>test</div>;
};

export default Canvas;
