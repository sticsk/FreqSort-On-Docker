import React, { useState, useEffect } from "react";
import SubmenuTrafic from "../../components/SubmenuTrafic";

const ErlangB = () => {
	const initialState = {
		erlang: 0,
		block: 0,
	};
	const initialState2 = {
		block2: 0,
		circuite: 0,
	};
	// const [items, setItems] = useState([]);
	const [data, setData] = useState(initialState);
	const [data2, setData2] = useState(initialState2);

	const [result, setResult] = useState(0);
	const [result2, setResult2] = useState(0);

	const { erlang, block } = data;
	const { circuite, block2 } = data2;

	useEffect(() => {
		var state = calculateCircuits(data.erlang, data.block);
		setResult(state);
	}, [data.erlang, data.block]);

	useEffect(() => {
		var state2 = calculateTraffic(data2.circuite, data2.block2);
		 	setResult2(state2);
	}, [data2.block2, data2.circuite]);

	const handleChangeInput = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setData({ ...data, [name]: +value });
	};
	const handleChangeInput2 = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setData2({ ...data2, [name]: +value });
		console.log(data2);
	};

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
	} //==================================================================================

	function blokprob(Atraf, Nch) {
		var blokking;
		var pi0 = 0;
		var aux1 = Atraf;
		var aux2 = 1;
		var out;

		for (let i = 0; i <= Nch; i++) {
			out = aux2;
			pi0 = pi0 + aux2;
			if (i > 0) {
				aux2 = aux2 / (i + 1);
			}
			aux2 = aux2 * aux1;
		}
		blokking = out / pi0;

		return blokking;
	}

	function calculateTraffic(NC, blok) {
		var Nchan = NC;
		var block = blok * 100;
		var Amax = (100 * Nchan) / (100 - block);
		var Amin = 0;
		var criterion = Amax;
		var test;
		var A;

		// if (block <= 0) alert(" Error: enter a positive blocking probability");
		// if (block >= 100) alert(" Error: enter blocking probability less than 100%");
		// if (block < 1)
		// 	alert(
		// 		" Warning: Make sure that you express \n         the blocking probability in percent (0..100%)\n Blocking probabilities less than 1% are not so common."
		// 	);

		while (criterion > 0.0001) {
			A = (Amax + Amin) / 2;
			test = 100 * blokprob(A, Nchan);
			if (test > block) {
				Amax = A;
			} else {
				Amin = A;
			}
			criterion = Amax - Amin;

			// console.log(A);
		}
		return A;
	}

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

	return (
		<div>
			{" "}
			<SubmenuTrafic />
			<div className="md:w-3/5 mx-2 md:mx-auto">
				<h1 className="text-2xl  text-center mt-2 font-bold border-b-2 border-gray-700 pb-1 ">
					Erlang B Calculator{" "}
				</h1>
				<h2 className="">
					Date intrare : <span className="font-bold text-green-700">Traffic ( Erlang )</span> si{" "}
      <span></span>	<span className="font-bold  text-green-700">
					<br></br>	Probabilitate de blocate ( % sau zecimal )
					</span>
					<br></br>
					Date iesire :<span className="text-red-500 font-bold"> Numar de circuite</span>
				</h2>

				<div class="max-w-xl border-2 mt-2 bg-[#a9b7d2] border-gray-500  rounded-md ">
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
								value={erlang < 0 ? erlang : null}
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
								value={block < 0 ? block : null}
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
								{result > 0 && data.erlang != 0 && data.block != 0
									? result + " Circuite "
									: "Rezultat"}
							</output>
						</div>
						<div class="flex items-center justify-between"></div>
					</form>
				</div>
				{/* ======================================================================== */}
				{/* <div class="border-b-4 border-gray-600 my-5"></div> */}
				<h2 className="mt-5">
					Date intrare : <span className="font-bold text-green-700">Numar de circuite</span> si{" "}
					<span className="font-bold text-green-700">
						Probabilitate de blocate ( % sau zecimal )
					</span>
					<br></br>
					Date iesire :<span className="text-red-500 font-bold"> Traffic ( Erlang )</span>
				</h2>

				<div class="max-w-xl border-2 bg-[#a9b7d2] mt-2 border-gray-500  rounded-md ">
					<form class=" shadow-md rounded p-3">
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="input1">
								Numar de circuite
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="input1"
								type="number"
								placeholder="Ex: 25 E"
								onChange={handleChangeInput2}
								value={circuite < 0 ? circuite : null}
								name="circuite"
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
								onChange={handleChangeInput2}
								name="block2"
								value={block2 < 0 ? block2 : null}
							></input>
						</div>
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="output">
								Rezultat
							</label>
							<output
								class="shadow  w-40 appearance-none border font-bold text-md bg-white rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="output"
							>
								{result2 > 0 && data2.block2 != 0 && data2.circuite != 0
									? result2.toFixed(3) + " Erlang "
									: "Rezultat"}
							</output>
						</div>
						<div class="flex items-center justify-between"></div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ErlangB;
