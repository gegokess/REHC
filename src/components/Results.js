import React, { useContext } from "react";

import { CalculationContext } from "../context/CalculationContext";

export default function Selection({ items, useSelection, name }) {
	const { ev } = useContext(CalculationContext);

	return (
		<div>
			Results
			{/* <Card> 
				<div className="mt-5">
					<TextField
						label="Captive use"
						id="outlined-start-adornment"
						className={clsx(classes.margin, classes.textField)}
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									kWh
								</InputAdornment>
							),
							readOnly: true,
						}}
						variant="outlined"
						defaultValue={ev.charging.goal.value}
					/>
				</div>
			</Card>*/}
		</div>
	);
}
