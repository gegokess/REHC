import React, { useState } from "react";
import HomeInstallmentsHeatPump from "./HomeInstallationsHeatPump";
import HomeInstallationsSolarPanels from "./HomeInstallationsSolarPanels";
import HomeInstallmentsBattery from "./HomeInstallationsBattery";

export default function SelectionHouse({
	setPumpPower,
	setSolarPower,
	setBatEnergy,
	pumpPower,
	setelectricityPrice,
}) {
	return (
		<div className="flex border border-red-300">
			<div className="w-1/2">
				<div className="w-1/2 mx-auto">
					<HomeInstallmentsHeatPump
						pumpPower={pumpPower}
						onChange={(value) => setPumpPower(value)}
					/>
					<HomeInstallationsSolarPanels
						onChange={(value) => setSolarPower(value)}
					/>
					<HomeInstallmentsBattery
						onChange={(value) => setBatEnergy(value)}
					/>
				</div>
			</div>
			<div className="w-1/2 sectionIcon">as</div>
		</div>
	);
}
