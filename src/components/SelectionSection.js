import React from "react";

class SelectionSection extends React.Component {
	render() {
		return (
			<div className="w-full border border-red-300">
				{this.props.children}
			</div>
		);
	}
}

export default SelectionSection;
