const Toast = ({ msg, handleShow, id, color, text }) => {
	return (
		<div
			id="toast-warning"
			className={
				 text  +
				" md:mt-20  mt-10 z-10 fixed  top-0 bot-10 right-5 flex items-center w-full max-w-xs p-4 text-white text-dark-500 rounded-lg shadow bg-slate-700 border-2 "
			}
			role="alert"
		>
			<div className={color + "border-2 border-green-600"}>
				<svg
					className="w-6 h-6 text-white"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path fillRule="evenodd" d={id} clipRule="evenodd"></path>
				</svg>
			</div>
			<div className="border-l-2 border-gray-400 pl-2 ml-2 text-sm font-normal text-capitalize">
				{msg.msg}
			</div>
			<button
				onClick={handleShow}
				type="button"
				className="ml-auto pl-1.5 w-8 h-8 font-bold bg-gray-700  rounded-lg hover:bg-gray-500"
				data-collapse-toggle="toast-success"
				aria-label="Close"
			>
				<span className="sr-only">Close</span>
				<svg
					className="w-5 h-5"
					fill="white"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
					></path>
				</svg>
			</button>
		</div>
	);
};

export default Toast;
