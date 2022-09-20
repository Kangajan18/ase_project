import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Total Revenue</Title>
      <Typography component="p" variant="h4">
        21000/=
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {Date()}
      </Typography>
    </React.Fragment>
  );
}
