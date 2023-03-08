import React, { useState, useEffect } from "react";
import SubmenuTrafic from "../../components/SubmenuTrafic";

const ErlangC = () => {
	const initialState = {
		erlang: 0,
		block: 0,
	};

	// const [items, setItems] = useState([]);
	const [data, setData] = useState(initialState);
	const [result, setResult] = useState(0);

	const { erlang, block } = data;
	useEffect(() => {
		// This code will be executed every time 'count' changes
		var state = calculateCircuits(data.erlang, data.block);
		setResult(state);
	}, [data.erlang,data.block]);

	const handleChangeInput = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setData({ ...data, [name]: +value });
		console.log(data);

		console.log(result);
	};
	//=============================================================================
	function calculateCircuits(traffic, desiredBlockingProb) {
		let N = 1; // initial value for number of circuits
		let Pb = 1; // initial value for blocking probability

		while (Pb > desiredBlockingProb) {
			Pb = erlangB(traffic, N);
			N++;
		}

		return N - 1; // return the last value of N that produced a blocking probability less than or equal to the desired value
	}

	function erlangB(A, N) {
		let sum = 0;
		for (let i = 0; i <= N; i++) {
			sum += Math.pow(A, i) / factorial(i);
		}
		return Math.pow(A, N) / (factorial(N) * sum);
	}

	function factorial(n) {
		if (n === 0 || n === 1) {
			return 1;
		}
		return n * factorial(n - 1);
	}

	return (
		<div>
			{" "}
			<SubmenuTrafic />
			<div className="w-4/5 mx-auto">
				<h1 className="text-2xl text-center mt-2 font-bold border-b-2 border-gray-700 pb-1 ">
					Erlang C Calculator{" "}
				</h1>
				<h2 className="">
					Date intrare :<span className="font-bold text-green-700">Traffic ( Erlang )</span> si{" "}
					<span className="font-bold text-green-700">
						Probabilitate de blocate ( % sau zecimal )
					</span>
				</h2>

				<div class="max-w-xl border-2 mt-2 border-gray-500  rounded-md ">
					<form class=" shadow-md rounded p-3">
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="input1">
								Traffic ( Erlang )
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="input1"
								type="number"
								placeholder="Ex: 25 E"
								onChange={handleChangeInput}
								value={erlang < 0 ? erlang  : null}
								name="erlang"
							></input>
						</div>
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="input2">
								Probabilitate de blocate ( % sau zecimal )
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="input2"
								type="number"
								placeholder="Ex: 10% sau 0.1"
								onChange={handleChangeInput}
								name="block"
								value={block < 0 ? block: null}
							></input>
						</div>
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="output">
								Rezultat
							</label>
							<output
								class="shadow  w-40 appearance-none border font-bold text-md bg-white rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="output"
								value={result > 0 ? result : "Rezultat"}
							>
								{result > 0 && data.erlang !=0 && data.block !=0 ? result +" Circuite ": "Rezultat"}
							</output>
						</div>
						<div class="flex items-center justify-between"></div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ErlangC;
