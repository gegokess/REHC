import { PreviousMap } from "postcss";
import React, { useState } from "react";

function HomeInstallationsBattery({ onChange }) {
	return (
		<div className="flex mt-6">
			<label className="flex items-center">
				<input
					type="number"
					className="form-checkbox"
					onChange={(event) => onChange(event.target.value)}
				/>
				<span className="ml-2">Battery</span>
			</label>
		</div>
	);
}

export default HomeInstallationsBattery;
