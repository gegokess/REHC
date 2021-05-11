import React, { useState } from "react";
import HomeInstallmentsHeatPump from "./HomeInstallationsHeatPump";
import HomeInstallationsSolarPanels from "./HomeInstallationsSolarPanels";
import HomeInstallmentsBattery from "./HomeInstallationsBattery";

class SelectionHouse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			battery_energy: 0,
			solar_panel_power: 0,
			heat_pump_power: 0,
		};
	}

	render() {
		return (
			<div className="flex border border-red-300">
				<div className="w-1/2">
					<div className="w-1/2 mx-auto">
						<HomeInstallmentsHeatPump
							onChange={(value) =>
								this.setState({ heat_pump_power: value })
							}
						/>
						<HomeInstallationsSolarPanels
							onChange={(value) =>
								this.setState({ solar_panel_power: value })
							}
						/>
						<HomeInstallmentsBattery
							onChange={(value) =>
								this.setState({ battery_energy: value })
							}
						/>
					</div>
				</div>
				<div className="w-1/2 sectionIcon">as</div>
			</div>
		);
	}
}

export default SelectionHouse;
