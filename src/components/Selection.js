import React, { setState } from "react";
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

export default function Selection({ items, useSelection, name }) {
	return (
		<div className="my-4">
			<Card>
				<Grid container spacing={1} display="inline">
					<Grid item xs={2}>
						<Switch
							checked={useSelection.value}
							onChange={useSelection.onChange}
							name="checked"
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
						<Typography>{name}</Typography>
					</Grid>
				</Grid>

				<Divider />
				<CardContent>
					{items.map((item) => (
						<HomeInstallation
							disabled={!useSelection.value}
							item={item}
						/>
					))}
				</CardContent>
			</Card>
		</div>
	);
}
