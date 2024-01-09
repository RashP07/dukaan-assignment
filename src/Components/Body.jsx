import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { PiArrowsDownUpLight } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Body = () => {
	return (
		<>
			<div className="flex mx-3 justify-between items-start ">
				<h1 className="mb-8 text-xl">Overview</h1>
				<select className="border rounded-md p-2">
					<option value="Last Month">Last Month</option>
				</select>
			</div>

			{/* Cards */}
			<div className="w-full  items-center block md:flex justify-between">
				<div className="flex w-full mx-3 mb-3 md:mb-0 items-center rounded-md md:flex-row bg-white drop-shadow-sm">
					<div>
						<div className="p-4">
							<p className="mb-3 mt-1 text-md text-gray-600">
								Online orders
							</p>
							<h1 className="inline-flex items-center text-3xl font-normal">
								231
							</h1>
						</div>
					</div>
				</div>
				<div className="flex w-full mx-3 items-center rounded-md md:flex-row bg-white drop-shadow-sm">
					<div>
						<div className="p-4">
							<p className="mb-3 mt-1 text-md text-gray-600">
								Amount received
							</p>
							<h1 className="inline-flex items-center text-3xl font-normal">
								₹23,92,312.19
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="">
				<h1 className="mx-3 mt-8 font-medium text-xl">Transactions | This Month</h1>
			</div>

			{/* Table */}
			<section className="mx-auto w-full px-4 py-4">
				<div className="mt-6 flex flex-col">
					<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden border border-gray-200 bg-white md:rounded-lg px-4 drop-shadow-sm">
								<div className="flex justify-between items-center bg-white py-3">
									<div className="flex items-center border pl-4 rounded-md">
										<FaSearch color="gray" />
										<input
											className="px-3 py-2 rounded-md w-80 focus:outline-none text-sm"
											type="text"
											placeholder="Search by order ID..."
										/>
									</div>
									<div className="flex justify-center items-center">
										<button className="bg-white border py-2 px-4 rounded-md text-sm mx-3">
											<span className="flex items-center">
												<span className="pr-1">
													Sort
												</span>
												<PiArrowsDownUpLight />
											</span>
										</button>
										<button className="bg-white border p-2 rounded-md">
											<PiDownloadSimpleBold className="text-lg" />
										</button>
									</div>
								</div>
								<table className="min-w-full divide-gray-200">
									<thead className="bg-gray-100">
										<tr>
											<th
												scope="col"
												className="px-4 py-3 text-left text-sm font-medium text-gray-900"
											>
												Order ID
											</th>
											<th
												scope="col"
												className="flex items-center justify-center px-12 py-3 text-left text-sm font-medium text-gray-900"
											>
												<span>Order date</span>
												<IoMdArrowDropdown
													color="black"
													fontSize={20}
												/>
											</th>

											<th
												scope="col"
												className="px-4 py-3 text-right text-sm font-medium text-gray-900"
											>
												Order amount
											</th>

											<th
												scope="col"
												className="flex items-center justify-end px-4 py-3 text-right text-sm font-medium text-gray-900"
											>
												Transaction fees
												<CiCircleInfo
													color="black"
													className="ml-1"
												/>
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white text-sm">
										<tr>
											<td
												className="whitespace-nowrap px-4 py-4 text-left"
												style={{ color: "#146eb4" }}
											>
												#281209
											</td>
											<td className="whitespace-nowrap px-12 py-4 text-center">
												7 July, 2023
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹1,278.23
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹22
											</td>
										</tr>
										<tr>
											<td
												className="whitespace-nowrap px-4 py-4 text-left"
												style={{ color: "#146eb4" }}
											>
												#281209
											</td>
											<td className="whitespace-nowrap px-12 py-4 text-center">
												7 July, 2023
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹1,278.23
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹22
											</td>
										</tr>
										<tr>
											<td
												className="whitespace-nowrap px-4 py-4 text-left"
												style={{ color: "#146eb4" }}
											>
												#281209
											</td>
											<td className="whitespace-nowrap px-12 py-4 text-center">
												7 July, 2023
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹1,278.23
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹22
											</td>
										</tr>

										<tr>
											<td
												className="whitespace-nowrap px-4 py-4 text-left"
												style={{ color: "#146eb4" }}
											>
												#281209
											</td>
											<td className="whitespace-nowrap px-12 py-4 text-center">
												7 July, 2023
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹1,278.23
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹22
											</td>
										</tr>
										<tr>
											<td
												className="whitespace-nowrap px-4 py-4 text-left"
												style={{ color: "#146eb4" }}
											>
												#281209
											</td>
											<td className="whitespace-nowrap px-12 py-4 text-center">
												7 July, 2023
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹1,278.23
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹22
											</td>
										</tr>
										<tr>
											<td
												className="whitespace-nowrap px-4 py-4 text-left"
												style={{ color: "#146eb4" }}
											>
												#281209
											</td>
											<td className="whitespace-nowrap px-12 py-4 text-center">
												7 July, 2023
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹1,278.23
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹22
											</td>
										</tr>
										<tr>
											<td
												className="whitespace-nowrap px-4 py-4 text-left"
												style={{ color: "#146eb4" }}
											>
												#281209
											</td>
											<td className="whitespace-nowrap px-12 py-4 text-center">
												7 July, 2023
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹1,278.23
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹22
											</td>
										</tr>
										<tr>
											<td
												className="whitespace-nowrap px-4 py-4 text-left"
												style={{ color: "#146eb4" }}
											>
												#281209
											</td>
											<td className="whitespace-nowrap px-12 py-4 text-center">
												7 July, 2023
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹1,278.23
											</td>
											<td className="whitespace-nowrap px-4 py-4 text-right">
												₹22
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				{/* Pagination */}
				<div className="mt-6 flex items-center justify-center">
					<a
						href="#"
						className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 mr-10 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
					>
						<IoIosArrowBack className="h-4 w-4" />
						<span>previous</span>
					</a>

					<div className="hidden items-center gap-x-3 md:flex">
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							1
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							...
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-white bg-sky-700"
						>
							10
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							11
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							12
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							13
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							14
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							15
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							16
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							17
						</a>
						<a
							href="#"
							className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-sky-700 hover:text-white"
						>
							18
						</a>
					</div>
					<a
						href="#"
						className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 ml-10 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
					>
						<span>Next</span>
						<IoIosArrowForward className="h-4 w-4" />
					</a>
				</div>
			</section>
		</>
	);
};

export default Body;