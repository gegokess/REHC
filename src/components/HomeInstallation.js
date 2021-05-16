import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from "@material-ui/core/Input";

export default function HomeInstallation({
	name,
	min,
	max,
	step,
	item,
	disabled,
}) {
	const [checked, setChecked] = useState(true);

	const toggleChecked = () => {
		setChecked((prev) => !prev);
	};

	return (
		<div>
			{/* <FormControlLabel
				control={
					<Switch
						checked={checked}
						onChange={toggleChecked}
						name="checkedB"
						color="primary"
					/>
				}
				label={name}
			/> */}
			<FormControl>
				<TextField
					type="number"
					textAlign="center"
					margin="dense"
					color="primary"
					inputProps={{
						min: min,
						max: max,
						step: step,
						style: { textAlign: "center" },
						"aria-label": { name },
					}}
					disabled={disabled}
					id="standard-adornment"
					{...item}
					aria-describedby="standard-helper-text"
				/>
				<FormHelperText id="standard-helper-text">
					{item.name} [{item.unit}]
				</FormHelperText>
			</FormControl>
		</div>
	);
}
