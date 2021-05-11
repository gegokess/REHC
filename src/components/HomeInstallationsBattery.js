import { PreviousMap } from "postcss";
import React, { useState } from "react";

function HomeInstallationsBattery(props) {
	return (
		<div className="flex mt-6">
			<label className="flex items-center">
				<input
					type="number"
					className="form-checkbox"
					onChange={(event) => props.onChange(event.target.value)}
				/>
				<span className="ml-2">Battery</span>
			</label>
		</div>
	);
}

export default HomeInstallationsBattery;
