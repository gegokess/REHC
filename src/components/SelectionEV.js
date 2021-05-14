import React, { useState } from "react";

export default function SelectionEV({
	setConsumption,
	setCarEnergy,
	setRange,
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
								onChange={(event) =>
									setCarEnergy(event.target.value)
								}
							/>
							<span className="ml-2">EV Energy</span>
						</label>
					</div>
				</div>
			</div>
			<div className="w-1/2 sectionIcon">as</div>
		</div>
	);
}
