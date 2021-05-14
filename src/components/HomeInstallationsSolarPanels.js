import { PreviousMap } from "postcss";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default function HomeInstallationsSolarPanels({
	onChange,
	solarPower,
	setSolarPower,
}) {
	const handleChange = (event, newValue) => {
		setSolarPower(newValue);
	};

	return (
		<div className="flex mt-6">
			<label className="flex items-center">
				<Typography id="discrete-slider-restrict" gutterBottom>
					Solar Panels {solarPower}
				</Typography>
				<Slider
					value={solarPower}
					onChange={handleChange}
					min={5}
					max={30}
					aria-labelledby="continuous-slider"
				/>
			</label>
		</div>
	);
}
