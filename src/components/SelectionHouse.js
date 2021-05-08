import React from "react";
import HomeInstallments from "./HomeInstallations";

class SelectionHouse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bat_size: 0,
			solar_panel_power: 0,
			heat_pump: false,
		};
	}

	render() {
		return (
			<div className="flex">
				<div className="w-1/2">
					<div className="w-1/2 mx-auto">
						<HomeInstallments
							name={"HeatPump"}
							handle={"hp"}
						></HomeInstallments>
						<HomeInstallments
							name={"Solar Panels"}
							handle={"sp"}
						></HomeInstallments>
						<HomeInstallments
							name={"Battery"}
							handle={"bat"}
						></HomeInstallments>
					</div>
				</div>
				<div className="w-1/2 sectionIcon">as</div>
			</div>
		);
	}
}

export default SelectionHouse;
