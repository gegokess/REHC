import React from "react";
import "./App.css";
import PriceChart from "./components/PriceChart";
import SelectionSection from "./components/SelectionSection";
import SelectionHouse from "./components/SelectionHouse";
import axios from "axios";

class App extends React.Component {
	state = { data: [] };

	async fetchPrices() {
		await axios("https://api.awattar.de/v1/marketdata").then((response) => {
			this.setState({
				data: response.data.data,
			});
		});
	}

	componentDidMount() {
		this.fetchPrices();
	}

	render() {
		if (Object.keys(this.state.data).length) {
			return (
				<div className="App">
					<h1 className="text-4xl p-4">Electricity valuation</h1>
					{/* <PriceChart data={this.state.data} /> */}
					<SelectionSection>
						<SelectionHouse></SelectionHouse>
					</SelectionSection>
				</div>
			);
		}
		return <div></div>;
	}
}

export default App;
