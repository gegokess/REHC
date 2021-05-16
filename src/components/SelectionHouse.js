import React, { useState } from "react";
import HomeInstallation from "./HomeInstallation";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export default function SelectionHouse({ pumpPower, solarPower, batEnergy }) {
	return (
		<div>
			<Card>
				<Typography variant="overline" display="block" gutterBottom>
					House
				</Typography>
				<Divider />
				<CardContent>
					<HomeInstallation
						name={"Heat Pump size"}
						item={pumpPower}
					/>
					<HomeInstallation
						name={"Solar Panel size"}
						item={solarPower}
					/>
					<HomeInstallation name={"Battery size"} item={batEnergy} />
				</CardContent>
			</Card>
		</div>
	);
}
