import React from "react";

class HomeInstallations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: false,
			handle: this.props.handle,
		};
	}

	toggleChange = () => {
		this.setState({
			isChecked: !this.state.isChecked,
		});
	};
	render() {
		return (
			<div className="flex mt-6">
				<label className="flex items-center">
					<input
						type="checkbox"
						className="form-checkbox"
						onChange={this.toggleChange}
					/>
					<span className="ml-2">{this.props.name}</span>
				</label>
			</div>
		);
	}
}

export default HomeInstallations;
