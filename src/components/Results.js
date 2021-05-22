import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

import InputAdornment from "@material-ui/core/InputAdornment";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { CalculationContext } from "../context/CalculationContext";

export default function Selection({ items, useSelection, name }) {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: "flex",
			flexWrap: "wrap",
		},
		margin: {
			margin: theme.spacing(1),
		},
		withoutLabel: {
			marginTop: theme.spacing(3),
		},
		textField: {
			width: "25ch",
		},
	}));
	const classes = useStyles();

	const { ev } = useContext(CalculationContext);
	console.log(ev);

	return (
		<div>
			<Typography variant="h2">Results</Typography>
			<Card>
				<div className="mt-5">
					<TextField
						label="Captive use"
						id="outlined-start-adornment"
						className={clsx(classes.margin, classes.textField)}
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									kWh
								</InputAdornment>
							),
							readOnly: true,
						}}
						variant="outlined"
						defaultValue={ev.charging.goal.value}
					/>
				</div>
			</Card>
		</div>
	);
}
