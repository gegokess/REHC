import { PreviousMap } from "postcss";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function HomeInstallationsBattery({ onChange, batEnergy, setBatEnergy }) {
	const handleChange = (event, newValue) => {
		setBatEnergy(newValue);
	};

	return (
		<div className="flex mt-6">
			<label className="flex items-center">
				<Typography id="discrete-slider-restrict" gutterBottom>
					Battery size {batEnergy}
				</Typography>
				<Slider
					value={batEnergy}
					onChange={handleChange}
					min={5}
					max={30}
					aria-labelledby="continuous-slider"
				/>
			</label>
		</div>
	);
}

export default HomeInstallationsBattery;
