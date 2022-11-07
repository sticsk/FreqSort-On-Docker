import Link from "next/link";
import SubmenuManager from "../../components/SubmenuManager";
import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";

export default function Manager() {
	const [frecventeprocesate, setFreqProcesate] = useState([]); // frecvente procesate
	const [farr, setFarr] = useState([]); // set initial Frecvente

	//-----------------------------------------------------------
	const initialState = { armonica: 3, nrfreq: 5 };
	const [procesaredata, setProcesaredata] = useState(initialState);
	const { armonica, nrfreq } = procesaredata;

	// -------------------------------------------------------- Date intrare
	const { state, dispatch } = useContext(DataContext);
	useEffect(() => {
		state.setfreq.farr ? setFarr(state.setfreq.farr) : null;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// ----------------------------------------------------------  Global store

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setProcesaredata({ ...procesaredata, [name]: value });
	};

	// ---------------------------------------------------------- Preluare date intrare

	const handleSubmit = (x) => {
		x.preventDefault(); // previne refresh la pagina

		if (procesaredata.armonica > 7 || procesaredata.armonica < 0) {
			// verificare armonica intre 0 - 7
			dispatch({
				type: "NOTIFY",
				payload: {
					error: "Armoinca este mai mare deca  si mai mica decat 7", // mesaj de avertizare
				},
			});
			setProcesaredata(initialState);
			return;
		}
		if (procesaredata.armonica % 1 != 0) {
			dispatch({
				type: "NOTIFY",
				payload: {
					error: "Armoinca este numar intreg", // mesaj de avertizare
				},
			});
			setProcesaredata(initialState);
			return;
		}

		// =============================================================================================== Procesare frecvente
		const sorted = []; // definire array gol in care se seteaza frecventele
		var defaultarr = farr; // preluare frecvente din lista de frecvente
		var armonici = []; // definire array in care se insereaza aromicile cu benzile aferente
		var swap = farr; // definire lista de frecvente din care se elimina frecventele deja folosite

		defaultarr.sort((a, b) => a.frecventa - b.frecventa); // sortarre frecvente crescator
		for (let i = 0; i < defaultarr.length && +sorted.length < +nrfreq; i++) {
			// for care trece prin toate frecventele, tine cont de lugime sete

			// ------------------------------------------------------------------------------------------------- Creare armonici
			for (let k = 0; k - 1 <= procesaredata.armonica; k++) {
				if (k == 0) {
					var fi = Number(defaultarr[i].frecventa) - Number(defaultarr[i].band / 1000 / 2) * k;
					var fs = Number(defaultarr[i].frecventa) + Number(defaultarr[i].band / 1000 / 2) * k;
				}
				if (k > 0) {
					var fi = Number(defaultarr[i].frecventa * k) - Number(defaultarr[i].band / 1000 / 2 / 5);
					var fs = Number(defaultarr[i].frecventa * k) + Number(defaultarr[i].band / 1000 / 2 / 5);
				}
				// ------------------------------------------------------------------------------------------------- Inserare armonici in array
		
			armonici.push({ fi: fi, fs: fs, freq: (+defaultarr[i].frecventa) });

				// console.log("fs", fs, "fi", fi,"freq",+defaultarr[i].frecventa);
			}
			if (sorted.length > 1) {
				console.log(sorted, armonici);
				for (let t = 2; t < sorted.length; t++) {
					for (let l = 2; l < sorted.length + 1; l++) {
						armonici.push({
							fi: (Number(sorted[l - 1].frecventa) + Number(sorted[t - 2].frecventa)) - (sorted[l-1].band+sorted[t-2].band)/2000000,
							fs: (Number(sorted[l - 1].frecventa) + Number(sorted[t - 2].frecventa)) + (sorted[l-1].band+sorted[t-2].band)/2000000,
							// freqt: Number(sorted[l].frecventa) + Number(sorted[l - 1].frecventa),
						});
						armonici.push({
							fi:( Number(sorted[l - 1].frecventa) - Number(sorted[t - 2].frecventa)) - (sorted[l-1].band+sorted[t-2].band)/2000000,
							fs: (Number(sorted[l - 1].frecventa) - Number(sorted[t - 2].frecventa) )+ (sorted[l-1].band+sorted[t-2].band)/2000000,
							// freqt: Number(sorted[l].frecventa) + Number(sorted[l - 1].frecventa),
						});
						armonici.push({
							fi: (Number(sorted[l - 1].frecventa) + Number(sorted[t - 2].frecventa)*2) - (sorted[l-1].band+sorted[t-2].band)/2000000,
							fs:( Number(sorted[l - 1].frecventa) + Number(sorted[t - 2].frecventa)*2) + (sorted[l-1].band+sorted[t-2].band)/2000000,
							// freqt: Number(sorted[l].frecventa) + Number(sorted[l - 1].frecventa),
						});
						armonici.push({
							fi: (Number(sorted[l - 1].frecventa) - Number(sorted[t - 2].frecventa)*2) - (sorted[l-1].band+sorted[t-2].band)/2000000,
							fs: (Number(sorted[l - 1].frecventa) - Number(sorted[t - 2].frecventa)*2) + (sorted[l-1].band+sorted[t-2].band)/2000000,
							// freqt: Number(sorted[l].frecventa) + Number(sorted[l - 1].frecventa),
						});
						armonici.push({
							fi: (Number(sorted[l - 1].frecventa)*2 + Number(sorted[t - 2].frecventa)) - (sorted[l-1].band+sorted[t-2].band)/2000000,
							fs:( Number(sorted[l - 1].frecventa)*2 + Number(sorted[t - 2].frecventa)) + (sorted[l-1].band+sorted[t-2].band)/2000000,
							// freqt: Number(sorted[l].frecventa) + Number(sorted[l - 1].frecventa),
						});
						armonici.push({
							fi: (Number(sorted[l - 1].frecventa)*2 - Number(sorted[t - 2].frecventa)) - (sorted[l-1].band+sorted[t-2].band)/2000000,
							fs:( Number(sorted[l - 1].frecventa)*2 - Number(sorted[t - 2].frecventa) )+ (sorted[l-1].band+sorted[t-2].band)/2000000,
							// freqt: Number(sorted[l].frecventa) + Number(sorted[l - 1].frecventa),
						});
					}
				}
			}
			armonici = [...new Set(armonici)];
			// ---------------------------------------------------------------------------------------------------Verificare frecvente compatibile
			var incanal = false; // definire variabila de tip  bool - false
			for (var n = 0; n < armonici.length; n++) {
				// for loop care verifica daca canalele de frecvente interfereaza
				// console.log(	"iteratie",n,"fs",armonici[n].fs,	"fi",	armonici[n].fi,	"freq",	+defaultarr[i].frecventa, armonici[n].freq );
				if (
					+defaultarr[i].frecventa < armonici[n].fs &&
					+defaultarr[i].frecventa > armonici[n].fi &&
					+armonici[n].freq != +defaultarr[i].frecventa
				) {
					// console.log("hei f wrong", defaultarr[i].frecventa);
					incanal = true;
				}
			}
			if (incanal == false) {
				sorted.push(defaultarr[i]);
				swap = swap.filter((item) => item.frecventa !== defaultarr[i].frecventa);
			}
		}
		setFarr(swap);
		setFreqProcesate(sorted); // setare lista finala frecvente procesate

		// ==================================================================================================
	};
	const [subset, setSubset] = useState([]); // seturi frecvente

	var swap2 = subset;

	const save = (e) => {
		e.preventDefault();
		swap2.push(frecventeprocesate);
		dispatch({
			type: "SETS",
			payload: {
				seturi: swap2,
			},
		});
		dispatch({ type: "NOTIFY", payload: { success: "Set de " + nrfreq + " frecvente adaugat" } });

		setSubset(swap2);
		setFreqProcesate([]);
	};

	function delete2(x) {
		setFreqProcesate(
			frecventeprocesate.filter(function (frecventeprocesate) {
				return frecventeprocesate.frecventa != x.frecventa;
			})
		);
		farr.push(x);
	}
	return (
		<div>
			<SubmenuManager />

			<div className="w-4/5 mx-auto">
				<div className="md:grid md:grid-cols-2  gap-4">
					{" "}
					<div className="">
						<div className="mt-4 static md:border-r-4 border-slate-400 pr-6 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-600 scrollbar-track-gray-300 overflow-y-auto md:h-[60vh]  ">
							<h2 className="pb-2 text-xl text-center font-bold tracking-wide">
								Set frecvente alocate{" "}
							</h2>

							<table className=" radius-xl table w-full  border-2  border-gray-700 font-medium bg-slate-400">
								<thead className="sticky  top-0 z-5 bg-slate-400 border-b border-gray-800">
									<tr>
										<th className="border-2  border-gray-700">Nr.</th>
										<th className="px-1 border-2 border-gray-700">Freq (Mhz)</th>
										<th className="px-1 border-2 border-gray-700 ">Band (Khz)</th>
										{/* <th className=" border-2 border-gray-700 ">
											<svg
												className="mx-auto "
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="25"
												viewBox="0 0 30 30"
											>
												<path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
											</svg>
										</th> */}
									</tr>
								</thead>
								<tbody className="text-center text-[#000000]">
									{farr
										? farr.map((x, index) => {
												return (
													<tr key={x.frecventa}>
														<th className="border-r-2  border-gray-700">{index + 1}</th>
														<td className="border-r-2  border-gray-700">{x.frecventa}</td>
														<td className="border-r-2  border-gray-700">{x.band}</td>
														{/* <td className="text-[#e02222] "> */}
														{/* <button
																className="hover:scale-110"
																onClick={() =>
																	setFarr(
																		farr.filter(function (farr) {
																			return farr.frecventa != x.frecventa;
																		})
																	)
																}
															>
																{" "}
																Sterge
															</button> */}
														{/* </td> */}
													</tr>
												);
										  })
										: null}
								</tbody>
							</table>
						</div>
					</div>
					<div>
						<form onSubmit={handleSubmit}>
							<div className="flex pt-4">
								<div className="mb-2 w-1/2 ">
									<label htmlFor="email" className=" block font-bold text-md text-gray-900 ">
										Nr. Armonici ( 1-7 )
									</label>
									<input
										min="0"
										max="7"
										step="1"
										type="number"
										onChange={handleChangeInput}
										value={armonica}
										name="armonica"
										id="email"
										className="ml-1 border w-full  border-blue-900 text-slate-200 text-sm rounded-lg bg-gray-700  block p-2.5 "
										default="3"
										required
									></input>{" "}
								</div>
								<div className="mb-6 w-1/2">
									<label
										htmlFor="password"
										className="block px-1 font-bold  text-md text-gray-900 "
									>
										Lungime Set
									</label>
									<input
										type="number"
										value={nrfreq}
										name="nrfreq"
										onChange={handleChangeInput}
										id="password"
										placeholder={"1 - " + farr.length + " frevente"}
										className=" border w-full ml-2  text-slate-200 border-blue-900  text-sm rounded-lg bg-gray-700  p-2.5 "
										required
									></input>{" "}
								</div>
							</div>
							<div className=" -mt-3">
						
								<button
									type="submit"
									// onClick={ handleSubmit}
									className="text-white shadow-lg -mt-0.5 py-2.5 mb-2 text-sm font-bold md:whitespace-nowrap w-full  ml-1.5 bg-green-700 border-2 hover:border-green-500 border-green-600 rounded-lg"
								>
									Genereaza Set Frecvente
								</button>
															</div>
						</form>

						<div className="pt-4">
							{/* <button
								// onClick={SalveazaArr}
								className="text-white  text-center w-1/2 ml-1  md:whitespace-nowrap font-medium rounded-lg text-sm px-5 py-2.5 border-2 hover:bg-[#435ed4] border-[#1630a3] bg-[#344cb3]"
							>
								Salveaza Set
							</button>
							<button
								// onClick={DeleteFarr}
								className="text-white text-center w-1/2 ml-1 pl-4 -mr-2 md:whitespace-nowrap font-medium rounded-lg text-sm px-5 py-2.5 border-2 hover:bg-[#ec2415] border-[#910000]  bg-[#da0000]"
							>
								Sterge Set
							</button> */}
						</div>
						<table className="ml-2 radius-xl table w-full  border-2  border-gray-700 font-medium bg-slate-400">
							<thead className="sticky  top-0 z-5 bg-slate-400 border-b border-gray-800">
								<tr>
									<th className="border-2  border-gray-700">Nr.</th>
									<th className="px-1 border-2 border-gray-700">Freq (Mhz)</th>
									<th className="px-1 border-2 border-gray-700 ">Band (Khz)</th>
									<th className=" border-2 border-gray-700 ">
										<svg
											className="mx-auto "
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="25"
											viewBox="0 0 30 30"
										>
											<path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
										</svg>
									</th>
								</tr>
							</thead>
							<tbody className="text-center text-[#000000]">
								{frecventeprocesate.length > 0
									? frecventeprocesate.map((x, index) => {
											return (
												<tr key={x.frecventa}>
													<th className="border-r-2  border-gray-700">{index + 1}</th>
													<td className="border-r-2  border-gray-700">{x.frecventa}</td>
													<td className="border-r-2  border-gray-700">{x.band}</td>
													<td className="text-[#e02222] ">
														<button className="hover:scale-110" onClick={() => delete2(x)}>
															{" "}
															Sterge
														</button>
													</td>
												</tr>
											);
									  })
									: null}
							</tbody>
						</table>
						<form onSubmit={save}>
							{frecventeprocesate.length > 0 ? (
								<button
									type="submit"
									className="text-white mt-4 ml-2 w-full shadow-lg py-2.5 mb-2 text-sm font-bold  md:whitespace-nowrap rounded-lg  px-5  border-2 hover:bg-[#435ed4] border-[#1630a3] bg-[#344cb3]"
								>
									Salveaza Set Frecvente
								</button>
							) : null}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
