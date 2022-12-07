/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

export default function Login() {

	const initialState = {
		nume: "",
		parola: "",
	};
	const [userData, setUserData] = useState(initialState);

	const { nume, parola } = userData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setUserData({ ...userData, [name]: value });
		console.log(userData);
	};

	return (
		<section className="">
			<div className="px-6 h-full md:mt-40 mt-10 text-gray-800">
				<div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
					<div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 sm: w-3/4 mb-12 md:mb-0">
						<img
							src="https://thumbs.dreamstime.com/b/kyiv-ukraine-jun-harris-falcon-iii-multiband-networking-manpack-radio-kyiv-ukraine-jun-harris-falcon-iii-multiband-networking-222089452.jpg"
							className="w-full rounded-lg shadow-2xl mb-5 xl:mb-0"
							alt="Sample image"
						/>
					</div>
					<div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 w-full mb-12 md:mb-0">
						<form>
							<div className="flex flex-row items-center justify-center lg:justify-start">
								{/* <p className="text-lg mb-0 mr-4">Sign in with</p> */}
							</div>

							<div className="mb-6">
								<input
									onChange={handleChangeInput}
									name="nume"
									value={nume}
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Email address"
								/>
							</div>

							<div className="mb-6">
								<input
									onChange={handleChangeInput}
									name="parola"
									value={parola}
									type="password"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Password"
								/>
							</div>

							<div className="flex justify-between items-center mb-6">
								<div className="form-group form-check">
									<input
										type="checkbox"
										className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										id="exampleCheck2"
									/>
									<label
										className="form-check-label inline-block text-gray-800"
									>
										Remember me
									</label>
								</div>
								<a href="#!" className="text-gray-800">
									Forgot password?
								</a>
							</div>

							<div className="text-center lg:text-left">
								<Link
									href="/manager"
									type="button"
									className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								>
									Login
								</Link>
								{/* <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an account?
                <a
                  href="#!"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >Register</a
                >
              </p> */}
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
