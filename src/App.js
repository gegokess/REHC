import React, { useState } from "react";
import "./App.css";
// import PriceChart from "./components/PriceChart";
import SelectionEV from "./components/SelectionEV";
import SelectionHouse from "./components/SelectionHouse";

function App() {
	const [data, setData] = useState(null);
	const [pumpPower, setPumpPower] = useState(0);
	const [carEnergy, setCarEnergy] = useState(0);
	const [solarPower, setSolarPower] = useState(0);
	const [batEnergy, setBatEnergy] = useState(0);
	const [range, setRange] = useState(0);
	const [carConsumption, setCarConsumption] = useState(0);
	const [electricityPrice, setelectricityPrice] = useState(0);

	return (
		<div className="App">
			<h1 className="text-4xl p-4">Electricity valuation</h1>
			{/* <PriceChart setData={setData} data={data} /> */}
			<SelectionHouse
				setPumpPower={setPumpPower}
				pumpPower={pumpPower}
				setSolarPower={setSolarPower}
				setBatEnergy={setBatEnergy}
				setelectricityPrice={setelectricityPrice}
			/>
			<SelectionEV
				setCarEnergy={setCarEnergy}
				setEvConsumption={setCarConsumption}
				setRange={setRange}
			/>
		</div>
	);
}

export default App;
