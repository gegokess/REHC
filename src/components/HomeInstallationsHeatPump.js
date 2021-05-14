import { PreviousMap } from "postcss";
import React, { useState } from "react";

function HomeInstallationsHeatPump({ onChange }) {
	return (
		<div className="flex mt-6">
			<label className="flex items-center">
				<input
					type="number"
					className="form-checkbox"
					onChange={(event) => onChange(event.target.value)}
				/>
				<span className="ml-2">Heat Pump</span>
			</label>
		</div>
	);
}

export default HomeInstallationsHeatPump;
