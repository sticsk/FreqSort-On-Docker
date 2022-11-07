import Link from "next/link";
import SubmenuManager from "../../components/SubmenuManager";
import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";

export default function Manager() {
	const { state, dispatch } = useContext(DataContext);
	useEffect(() => {
		state.setfreq.farr ? setFarr(state.setfreq.farr) : null;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [farr, setFarr] = useState([]);
	const initialState = {
		frecventa: "",
		banda: "",
	};
	const [fdata, setFdata] = useState(initialState);
	const { frecventa, banda } = fdata;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFdata({ ...fdata, [name]: value });
	};
	const handleSubmit = async (x) => {
		x.preventDefault();
		var dublura = farr.find((x) => x.frecventa == frecventa);
		if (dublura) {
			dispatch({
				type: "NOTIFY",
				payload: {
					error: "Dublura la frecventa de " + frecventa + " Mhz",
				},
			});

			return;
		}
		if (frecventa < 30 || frecventa > 108) {
			dispatch({
				type: "NOTIFY",
				payload: {
					error: "Frecventa > 30 Mhz si < 108 Mhz",
				},
			});
			setFdata(initialState);
			return;
		}
		if (banda < 5 || banda > 200) {
			dispatch({
				type: "NOTIFY",
				payload: {
					error: "Banda > 5 KHz si < 200 KHz",
				},
			});
			setFdata(initialState);
			return;
		}
		dispatch({
			type: "NOTIFY",
			payload: {
				success: " Frecventa " + frecventa + " de Mhz  ---> " + "Banda de " + banda + " Khz",
			},
		});

		setFarr([...farr, { frecventa: frecventa, band: banda }]);
	};
	useEffect(() => {
		dispatch({
			type: "SETF",
			payload: {
				farr,
			},
		});
	}, [dispatch, farr]);
	const DeleteFarr = (e) => {
		e.preventDefault();
		const response = prompt(
			"Doriti sa stergeti setul de frecvente, pentru confimrare scrieti `da`"
		);
		if (response == "da") {
			setFarr([]);
		}
	};
	const SalveazaArr = (e) => {
		e.preventDefault();
		dispatch({
			type: "SETF",
			payload: {
				farr,
			},
		});
	};
	return (
		<div>
			<SubmenuManager />
			{/* ---------- > End Meniu + Submeniu */}

			<div className="">
				<div className=" md:w-3/5 xl:w-2/5 mx-auto text-center pr-3 border-slate-400 md:col-span-3 col-span-6  ">
					<form>
						<div className="flex mr-1.5 -ml-0.5 ">
							<div className="mb-2 w-1/2 ">
								<label
									htmlFor="email"
									className="block  mb-2 px-1 font-bold pt-1 text-md m text-gray-900 "
								>
									Frecventa ( MHz )
								</label>
								<input
									type="number"
									onChange={handleChangeInput}
									value={frecventa}
									name="frecventa"
									id="email"
									className=" border w-full  border-blue-900 ml-2  text-slate-200 text-sm rounded-lg bg-gray-700  block p-2.5 "
									placeholder="30 - 108 Mhz"
									required
								></input>{" "}
							</div>
							<div className="mb-6 w-1/2">
								<label
									htmlFor="password"
									className="block  mb-2 px-1 font-bold pt-1 text-md text-gray-900 "
								>
									Banda ( KHz )
								</label>
								<input
									type="number"
									value={banda}
									name="banda"
									onChange={handleChangeInput}
									id="password"
									placeholder="5 - 200 Khz"
									className=" border w-full ml-3 text-slate-200 border-blue-900  text-sm rounded-lg bg-gray-700  p-2.5 "
									required
								></input>{" "}
							</div>
						</div>
						<div className=" -mt-3">
							<button
								type="submit"
								onClick={handleSubmit}
								className="text-white shadow-xl -mt-0.5 py-2.5 mb-2 text-sm font-bold md:whitespace-nowrap w-full  ml-1.5 bg-green-700 border-2 hover:border-green-500 border-green-600 rounded-lg"
							>
								Adauga Frecventa
							</button>
							<button
								onClick={SalveazaArr}
								className="text-white shadow-xl text-center w-1/2 ml-1  md:whitespace-nowrap font-medium rounded-lg text-sm px-5 py-2.5 border-2 hover:bg-[#435ed4] border-[#1630a3] bg-[#344cb3]"
							>
								Salveaza Set
							</button>
							<button
								onClick={DeleteFarr}
								className="text-white text-center w-1/2 ml-1 pl-4 -mr-2 md:whitespace-nowrap font-medium rounded-lg text-sm px-5 py-2.5 border-2 hover:bg-[#ec2415] border-[#910000]  bg-[#da0000]"
							>
								Sterge Set
							</button>
						</div>
					</form>
					{/* --------->  start Table Freq  */}
					<div>
						<div className="rounded-sm ml-2 mt-4 static  scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-600 scrollbar-track-gray-300 overflow-y-auto h-[60vh] -mr-2 ">
							<h2 className="pb-2 text-2xl font-bold tracking-wide">Tabel frecvente alocate</h2>

							<table className=" table w-full border-2 border-gray-700 font-medium bg-slate-400">
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
									{farr
										? farr.map((x, index) => {
												return (
													<tr key={x.frecventa}>
														<th className="border-r-2  border-gray-700">{index + 1}</th>
														<td className="border-r-2  border-gray-700">{x.frecventa}</td>
														<td className="border-r-2  border-gray-700">{x.band}</td>
														<td className="text-[#e02222] ">
															<button
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
															</button>
														</td>
													</tr>
												);
										  })
										: null}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				{/* --------->  finish Table Freq  */}
			</div>
			


		</div>
	);
}
