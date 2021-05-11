import React, { useState } from "react";

class SelectionEV extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ev_energy: 0,
			ev_consumption: 0,
		};
	}

	render() {
		return (
			<div className="flex  border border-red-300">
				<div className="w-1/2">
					<div className="w-1/2 mx-auto">
						<div className="flex mt-6">
							<label className="flex items-center">
								<input
									type="number"
									className="form-checkbox"
									onChange={(event) =>
										this.setState({
											ev_energy: event.target.value,
										})
									}
								/>
								<span className="ml-2">EV Energy</span>
							</label>
						</div>
					</div>
				</div>
				<div className="w-1/2 sectionIcon">as</div>
			</div>
		);
	}
}

export default SelectionEV;
