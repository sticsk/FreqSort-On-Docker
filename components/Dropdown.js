/* eslint-disable @next/next/no-img-element */
import React from "react";
import Popper from "popper.js";
import Link from "next/link";

const Dropdown = ({ color }) => {
	// dropdown props
	const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
	const btnDropdownRef = React.createRef();
	const popoverDropdownRef = React.createRef();
	const openDropdownPopover = () => {
		new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: "bottom-start",
		});
		setDropdownPopoverShow(true);
	};
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};
	// bg colors
	let bgColor;
	color === "white" ? (bgColor = "bg-gray-800") : (bgColor = "bg-slate-500");
	return (
		<>
			<div className="mr-8">
				<div className="w-full ">
					<div className=" w-full ">
						<div className="">
							{" "}
							<button
								className={
									"text-white flex font-bold uppercase text-xl w-full mr-2 bg-gray-900 px-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 " +
									bgColor
								}
								style={{ transition: "all .15s ease" }}
								type="button"
								ref={btnDropdownRef}
								onClick={() => {
									dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
								}}
							>
								<p className="pt-1.5">Meniu </p>
								<img className="h-10 w-10 pl-2 text-white" src="\icons\menu.svg" alt="rad"></img>
							</button>
						</div>
						<div
							ref={popoverDropdownRef}
							className={
								(dropdownPopoverShow ? " " : "hidden ") +
								(color === "white" ? "bg-slate-300 " : bgColor + " ") +
								" z-50 py-2 border-4 border-slate-600  px-1 list-none text-left text-white rounded shadow-lg mt-1.5 "
							}
							style={{ minWidth: "95vw" }}
						>
							<Link
								href="/"
								className={
									"text-sm py-2 px-2 font-bold  block w-full whitespace-no-wrap bg-transparent " +
									(color === "white" ? " text-[#000000] bg-slate-400 rounded border border-[#000000]" : "text-white")
								}
								onClick={() =>  closeDropdownPopover()}
							>
								Planificare Retele
							</Link>
							<div>
								<Link
									href="/manager"
                  className={
                    "text-sm py-2 px-1.5 font-bold block w-full whitespace-no-wrap bg-transparent " +
                    (color === "white" ? " text-[#000000] bg-slate-400 mt-1 rounded border border-[#000000]" : "text-white")
                  }
                  onClick={() =>  closeDropdownPopover()}
                  >
									Procesare Frecventa
								</Link>
							</div>
							<Link
								href="/trafic"
                className={
                  "text-sm py-2 px-2 font-bold  block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-[#000000] bg-slate-400 mt-1 rounded border border-[#000000]" : "text-white")
                }
								onClick={() =>  closeDropdownPopover()}
							>
								Trafic Date
							</Link>
							<div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
							<Link
								href="/login"
                className={
                  "text-sm py-2 px-1.5 font-bold block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-[#000000] bg-slate-300 mt-1 rounded border border-[#000000]" : "text-white")
                }
								onClick={() =>  closeDropdownPopover()}
							>
								Login{" "}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default function DropdownRender() {
	return (
		<>
			<Dropdown color="white" />
		</>
	);
}
