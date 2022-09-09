import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
export default function BookingForm() {
  const [isPayWithCard, setisPayWithCard] = useState(false);
  const [numberOfBeds, setnumberOfBeds] = useState(0);
  const onPrintValue = () => {
    console.log("printing");
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Booking Page
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Number of Beds </h3>
            <div style={{ marginLeft: 10 }}>
              <select value={numberOfBeds}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>AC Room</h3>
            <Checkbox defaultChecked />
          </div>
        </Grid>

        <Grid item xs={12}>
          <p
            style={{
              fontWeight: "bolder",
              fontSize: 18,
              textDecoration: "2px underline",
              borderRadius: 30,
            }}
          >
            Services
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Room Service
              <Checkbox defaultChecked />
            </div>
            <div>
              WashDress
              <Checkbox />
            </div>
            <div>
              Food
              <Checkbox />
            </div>
            <div>
              Massage
              <Checkbox disabled />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          Number of days:
          <div style={{}}>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          Are you pay with your Credit Card?
          <Checkbox
            onClick={() => {
              setisPayWithCard(!isPayWithCard);
              console.log(isPayWithCard);
            }}
          />
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 3, ml: 54 }} onClick={onPrintValue}>
        Save
      </Button>
    </React.Fragment>
  );
}
