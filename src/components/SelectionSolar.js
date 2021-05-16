import React, { useState } from "react";
import HomeInstallation from "./HomeInstallation";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

export default function SelectionEV({
	setCarConsumption,
	carConsumption,
	setCarEnergy,
	carEnergy,
	setRange,
	range,
	useCar,
	setUseCar,
}) {
	return (
		<div className="my-4">
			<Card>
				<Grid container spacing={1} display="inline">
					<Grid item xs={2}>
						<Switch
							checked={useCar}
							onChange={(event, newValue) => {
								setUseCar(newValue);
							}}
							name="checkedB"
							color="primary"
						/>
					</Grid>
					<Divider orientation="vertical" flexItem />
					<Grid
						item
						xs={9}
						alignItems="center"
						justify="center"
						direction="column"
					>
						<Typography>Electric vehicle</Typography>
					</Grid>
				</Grid>

				<Divider />
				<CardContent>
					<Typography id="carEnergy-slider" gutterBottom>
						EV battery size
					</Typography>
					<Slider
						value={carEnergy}
						onChange={(event, newValue) => {
							setCarEnergy(newValue);
						}}
						valueLabelDisplay="auto"
						min={15}
						max={100}
						step={5}
						aaria-labelledby="carEnergy-slider"
						disabled={!useCar}
					/>
					<Typography id="carConsumption-slider" gutterBottom>
						Car consumption
					</Typography>
					<Slider
						value={carConsumption}
						onChange={(event, newValue) => {
							setCarConsumption(newValue);
						}}
						valueLabelDisplay="auto"
						min={15}
						max={25}
						aaria-labelledby="carConsumption-slider"
						disabled={!useCar}
					/>
					<HomeInstallation
						name={"Car Range"}
						setValue={setRange}
						value={range}
						min={5000}
						max={50000}
						step={1000}
					/>
				</CardContent>
			</Card>
		</div>
	);
}
