import React, { useRef, useEffect } from "react";

const Canvas = () => {
	var sorted = [
		2.1, 2.2, 2.55, 3.6, 4.55,
		// 5.8, 7.88, 9, 12
	];

	const powerset = (arr) => arr.reduce((a, v) => a.concat(a.map((r) => [v].concat(r))), [[]]);

	
	var canaleintermodulatii = powerset(sorted).filter((x) => x.length > 1);

	canaleintermodulatii = [...new Set(canaleintermodulatii)];
	function generateCombinations(array, index, currentResult, results) {
		if (index === array.length) {
			results.push(currentResult);
			return;
		}
		generateCombinations(array, index + 1, +currentResult + +array[index], results);
		generateCombinations(array, index + 1, +currentResult - +array[index], results);
		generateCombinations(array, index + 1, +currentResult + +array[index] * 2, results);
		generateCombinations(array, index + 1, +currentResult - +array[index] * 2, results);
	}

	const results = [];
	console.log("Interm length", canaleintermodulatii.length);
	for (var i = 0; i < canaleintermodulatii.length; i++) {
		generateCombinations(canaleintermodulatii[i], 0, "", results);
	}

	let uniqlist = [...new Set(results.filter((e) => e > 0))];

	let uniqlist0 = uniqlist.map((x) => Number.parseFloat(x.toFixed(4)));

	console.log(uniqlist0);

	return (
		<div className="flex">
			
		</div>
	);
};

export default Canvas;
