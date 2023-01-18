import Link from "next/link";
import SubmenuManager from "../../components/SubmenuManager";
import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import * as XLSX from "xlsx";

export default function Manager() {
	const { state, dispatch } = useContext(DataContext);
	useEffect(() => {
		state.setsoffreq.seturi ? setSetarr(state.setsoffreq.seturi) : null;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [setsarr, setSetarr] = useState([]);
	const initialState = {
		frecventa: "",
		banda: "",
	};
	var helparr = [];
	var data = {};
	for (var i = 0; i <= setsarr.length; i++) {
		helparr.push(setsarr[i]);
	}
	var obj = []
	for (var m = 1; m < helparr.length ; m++) {
		obj.push({'Nr set ':'Setul '+m })
		for (var x = 0; x < helparr[m-1].length; x++) 
		{
			obj.push({'Frecventa - MHz': helparr[m-1][x].frecventa, 'Banda - kHz': helparr[m-1][x].band }) 
		}
		// console.log(obj);
	}

	 data = obj
	console.log(data)
	const downloadExcel = (data) => {
		const worksheet = XLSX.utils.json_to_sheet(data);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
		// let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
		XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
		XLSX.writeFile(workbook, "Seturi Frecvente .xlsx");
	};

	const StergeSeturi = () => {
		setSetarr([]);
	};
	return (
		<div className="">
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
			<div className="md:w-3/5 w-4/5 -mb-8 border-b-2 border-slate-800  mx-auto mt-10">
				<div className="flex ">
					<button
						className="text-white flex w-1/2 justify-center shadow-xl -mt-2 py-2.5 mb-2 text-sm font-bold md:whitespace-nowrap -mr-1.5  bg-slate-900 hover:bg-slate-800 border-2 hover:border-green-500 border-green-600 rounded-lg"
						onClick={() => downloadExcel(data)}
					>
						<span className="pr-4">Salveaza in Excell</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="26px" height="26px">
							<rect width="16" height="9" x="28" y="15" fill="#21a366" />
							<path
								fill="#185c37"
								d="M44,24H12v16c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V24z"
							/>
							<rect width="16" height="9" x="28" y="24" fill="#107c42" />
							<rect width="16" height="9" x="12" y="15" fill="#3fa071" />
							<path fill="#33c481" d="M42,6H28v9h16V8C44,6.895,43.105,6,42,6z" />
							<path fill="#21a366" d="M14,6h14v9H12V8C12,6.895,12.895,6,14,6z" />
							<path
								d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z"
								opacity=".05"
							/>
							<path
								d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z"
								opacity=".07"
							/>
							<path
								d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z"
								opacity=".09"
							/>
							<linearGradient
								id="flEJnwg7q~uKUdkX0KCyBa"
								x1="4.725"
								x2="23.055"
								y1="14.725"
								y2="33.055"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stopColor="#18884f" />
								<stop offset="1" stopColor="#0b6731" />
							</linearGradient>
							<path
								fill="url(#flEJnwg7q~uKUdkX0KCyBa)"
								d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"
							/>
							<path
								fill="#fff"
								d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526	l3.193-5.018L9.807,19z"
							/>
						</svg>
					</button>

					<button
						className="text-white flex w-1/2 justify-center shadow-xl -mt-2 py-2.5 mb-2 text-sm font-bold md:whitespace-nowrap -mr-1.5 ml-2.5 bg-red-600 hover:bg-red-700 border-2 hover:border-green-500 border-red-800 rounded-lg"
						onClick={() => StergeSeturi()}
					>
						Sterge Seturi{" "}
					</button>
				</div>
			</div>

			{setsarr.map((x, i) => {
				return (
					<div key={i} className="md:w-3/5 w-4/5 mx-auto my-10">
						<p className="text-xl font-bold text-green-700 text-center pb-2 ">
							Setul {i + 1} de frecvente{" "}
						</p>
						<table className=" radius-xl table w-full  border-2  border-gray-700 font-medium bg-slate-400">
							<thead className="sticky  top-0 z-5 bg-slate-400 border-b border-gray-800">
								<tr>
									<th className="border-2  border-gray-700">Nr.</th>
									<th className="px-1 border-2 border-gray-700">Freq (MHz)</th>
									<th className="px-1 border-2 border-gray-700 ">Band (kHz)</th>
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
								{x.map((m, index) => {
									return (
										<tr key={m.frecventa}>
											<th className="border-r-2  border-gray-700">{index + 1}</th>
											<td className="border-r-2  border-gray-700">{m.frecventa}</td>
											<td className="border-r-2  border-gray-700">{m.band}</td>
											{/* <td className="text-[#e02222] "></td> */}
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				);
			})}
		</div>
	);
}
