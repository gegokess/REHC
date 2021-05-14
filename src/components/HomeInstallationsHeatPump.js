import { PreviousMap } from "postcss";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function HomeInstallationsHeatPump({ onChange, pumpPower, setPumpPower }) {
	const handleChange = (event, newValue) => {
		setPumpPower(newValue);
	};

	return (
		<div className="flex mt-6">
			<label className="flex items-center">
				<Typography id="discrete-slider-restrict" gutterBottom>
					Heat Pump Power {pumpPower}
				</Typography>
				<Slider
					value={pumpPower}
					onChange={handleChange}
					min={2}
					max={15}
					aria-labelledby="continuous-slider"
				/>
			</label>
		</div>
	);
}

export default HomeInstallationsHeatPump;
