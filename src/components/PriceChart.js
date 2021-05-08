import { Bar } from "react-chartjs-2";
import React from "react";

class PriceChart extends React.Component {
	chartData = {
		labels: this.props.data.map(
			(x) => new Date(x.start_timestamp).getHours() + ":00"
		),
		datasets: [
			{
				label: "kWh prices",
				data: this.props.data.map((x) => x.marketprice / 1000),
				borderColor: "rgba(0,0,220,0.8)",
				fill: false,
			},
		],
	};

	options = {
		scales: {
			xAxes: [
				{
					categoryPercentage: 1.0,
					barPercentage: 1.0,
				},
			],
		},
	};

	componentDidMount() {
		console.log("mounted");
		console.log(this.chartReference);
	}

	render() {
		return (
			<div>
				<Bar data={this.chartData} options={this.options} />
			</div>
		);
	}
}

export default PriceChart;
