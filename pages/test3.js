import React from "react";

const Test3 = () => {
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

	function computefsl(NC, blok) {
		var Nchan = NC;
		var block = blok*100;
		var Amax = (100 * Nchan) / (100 - block);
		var Amin = 0;
		var criterion = Amax;
		var test;
		var A;

		if (block <= 0) alert(" Error: enter a positive blocking probability");
		if (block >= 100) alert(" Error: enter blocking probability less than 100%");
		if (block < 1)
			alert(
				" Warning: Make sure that you express \n         the blocking probability in percent (0..100%)\n Blocking probabilities less than 1% are not so common."
			);

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
    return A
	}
	const N = 20; // number of circuits
	const P = 0.01; // probability of blocking
	const traffic = computefsl(N, P);

	console.log(`Offered traffic: ${traffic} Erlangs`);

	return <div></div>;
};
export default Test3;
