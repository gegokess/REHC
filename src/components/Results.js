import React, { setState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function Selection({ items, useSelection, name }) {
	return (
		<div className="my-4">
			<Typography variant="h2">Results</Typography>
			<Card>
				<div className="mt-5">
					<TextField
						id="standard-read-only-input"
						label="Einspeisevergütung"
						defaultValue="Hello World"
						variant="outlined"
						InputProps={{
							readOnly: true,
						}}
					/>
				</div>
			</Card>
		</div>
	);
}
