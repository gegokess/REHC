import React, { useState } from "react";

export default function SelectionEV({
	setCarConsumption,
	carConsumption,
	setCarEnergy,
	carEnergy,
	setRange,
	range,
}) {
	return (
		<div className="flex  border border-red-300">
			<div className="w-1/2">
				<div className="w-1/2 mx-auto">
					<div className="flex mt-6">
						<label className="flex items-center">
							<input
								type="number"
								className="form-checkbox"
								value={carEnergy}
								onChange={(event) =>
									setCarEnergy(event.target.value)
								}
							/>
							<span className="ml-2">EV Battery size</span>
						</label>
					</div>
					<div className="flex mt-6">
						<label className="flex items-center">
							<input
								type="number"
								className="form-checkbox"
								value={carConsumption}
								onChange={(event) =>
									setCarConsumption(event.target.value)
								}
							/>
							<span className="ml-2">EV Consumption</span>
						</label>
					</div>
					<div className="flex mt-6">
						<label className="flex items-center">
							<input
								type="number"
								className="form-checkbox"
								value={range}
								step={1000}
								onChange={(event) =>
									setRange(event.target.value)
								}
							/>
							<span className="ml-2">EV Range</span>
						</label>
					</div>
				</div>
			</div>
			<div className="w-1/2 sectionIcon">as</div>
		</div>
	);
}
