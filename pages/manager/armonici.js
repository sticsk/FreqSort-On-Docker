import Link from "next/link";
import SubmenuManager from "../../components/SubmenuManager";
import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";

const Armonici = () => {
	const { state, dispatch } = useContext(DataContext);
	useEffect(() => {
		state.setarmonici.armonici ? setSetarr(state.setarmonici.armonici) : null;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [setsarr, setSetarr] = useState([]);

	const initialState = {
		frecventa: "",
		banda: "",
	};

	console.log(state.setarmonici.armonici);

	return (
		<div>
			<SubmenuManager />
			{/* ---------- > End Meniu + Submeniu */}

			{/* {setsarr.map((x, i) => {
					return (
						<div className="m-5" key={i}>
							
							{x.map((m, index) => {
								console.log("x.f", m.frecventa);
								return (
									<tr key={m.frecventa}>
										<th className="border-r-2  border-gray-700">{index + 1}</th>
										<td className="border-r-2  border-gray-700">{m.frecventa}</td>
										<td className="border-r-2  border-gray-700">{m.band}</td>
										<td className="text-[#e02222] ">
										
										</td>
									</tr>
								);
							})}
						</div>
					);
				})} */}

			
			<table className=" radius-xl table mt-4 w-4/5 mx-auto  border-2  border-gray-700 font-medium bg-slate-400">
								<thead className="sticky  top-0 z-5 bg-slate-400 border-b border-gray-800">
									<tr>
										<th className="border-2  border-gray-700">Nr.</th>
										<th className="px-1 border-2 border-gray-700">Canal (Mhz)</th>
										<th className="px-1 border-2 border-gray-700">Frecventa (Mhz)</th>
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
									{setsarr
										? setsarr.map((x, index) => {
												return (
													<tr key={x.fi}>
														<th className="border-r-2  border-gray-700">{index + 1}</th>
														<td className="border-r-2  border-gray-700">{(x.fi)} - {x.fs}</td>
														<td className="border-r-2  border-gray-700">{x.type}</td>
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
	);
};

export default Armonici;
