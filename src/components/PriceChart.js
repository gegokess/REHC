import { Bar } from "react-chartjs-2";
import React from "react";
import axios from "axios";

function PriceChart({ setData, data }) {
	const fetchPrices = async () => {
		await axios("https://api.awattar.de/v1/marketdata").then((response) => {
			setData(response.data.data);
		});
	};

	if (data) {
		const chartData = {
			labels: data.map(
				(x) => new Date(x.start_timestamp).getHours() + ":00"
			),
			datasets: [
				{
					label: "kWh prices",
					data: data.map((x) => x.marketprice / 1000),
					borderColor: "rgba(0,0,220,0.8)",
					fill: false,
				},
			],
		};

		const options = {
			scales: {
				xAxes: [
					{
						categoryPercentage: 1.0,
						barPercentage: 1.0,
					},
				],
			},
		};

		return (
			<div>
				<Bar data={chartData} options={options} />
			</div>
		);
	} else {
		return <div></div>;
	}
}

export default PriceChart;
