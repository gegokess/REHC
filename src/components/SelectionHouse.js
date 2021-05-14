import React, { useState } from "react";
import HomeInstallmentsHeatPump from "./HomeInstallationsHeatPump";
import HomeInstallationsSolarPanels from "./HomeInstallationsSolarPanels";
import HomeInstallmentsBattery from "./HomeInstallationsBattery";

export default function SelectionHouse({
	setPumpPower,
	pumpPower,
	setSolarPower,
	solarPower,
	setBatEnergy,
	batEnergy,
	setElectricityPrice,
}) {
	return (
		<div>
			<HomeInstallmentsHeatPump
				pumpPower={pumpPower}
				setPumpPower={setPumpPower}
				onChange={(value) => setPumpPower(value)}
			/>
			<HomeInstallationsSolarPanels
				solarPower={solarPower}
				setSolarPower={setSolarPower}
				onChange={(value) => setSolarPower(value)}
			/>
			<HomeInstallmentsBattery
				batEnergy={batEnergy}
				setBatEnergy={setBatEnergy}
				onChange={(value) => setBatEnergy(value)}
			/>
		</div>
	);
}
