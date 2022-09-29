import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { SelectChangeEvent } from "@mui/material/Select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 450,
    },
  },
};

const serviceNames = ["Room service", "Food service", "Vehicle service"];

export default function BookingForm() {
  const [isPayWithCard, setisPayWithCard] = useState(false);
  const [numberOfRooms, setnumberOfRooms] = useState(0);
  const [isac, setisac] = useState(false);
  const [numberOfDays, setnumberOfDays] = useState(0);
  const [myServices, setMyServices] = React.useState([]);

  const onPrintValue = () => {
    // console.log(
    //   "room type" + localStorage.getItem("items"),
    //   "card = " + isPayWithCard,
    //   "number of rooms = " + numberOfRooms,
    //   "Ac room = " + isac,
    //   "Number of days " + numberOfDays,
    //   "services = " + myServices
    // );

    const data = {
      roomType: localStorage.getItem("items"),
      card: isPayWithCard,
      checkIn: checkIn,
      checkOut: checkOut,
      numberOfRooms: numberOfRooms,
      Ac: isac,
      numberOfDays: numberOfDays,
      services: myServices,
    };

    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
  };

  const handleChangeRoom = (e) => {
    setnumberOfRooms(e.target.value);
    console.log(numberOfRooms);
  };

  const handleNumberOfdays = (e) => {
    setnumberOfDays(e.target.value);
    console.log(numberOfDays);
  };

  const theme = useTheme();

  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const handleChange = (event: SelectChangeEvent<typeof myServices>) => {
    const {
      target: { value },
    } = event;
    setMyServices(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ marginLeft: 370 }}>
        {localStorage.getItem("items") + "  Selected"}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: 0, width: 190 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  NUM OF ROOMS
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={numberOfRooms}
                  label="Number of Room"
                  onChange={handleChangeRoom}
                >
                  <MenuItem value={0}>SELECT</MenuItem>
                  <MenuItem value={1}>ONE</MenuItem>
                  <MenuItem value={2}>TWO</MenuItem>
                  <MenuItem value={3}>THREE</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            CheckIn
            <DatePicker
              selected={checkIn}
              onChange={(date: Date) => setCheckIn(date)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            CheckOut
            <DatePicker
              selected={checkOut}
              onChange={(date: Date) => setCheckOut(date)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={10}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>AC Room</h3>
            <Checkbox
              onClick={() => {
                setisac(!isac);
              }}
            />
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
          ></p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl sx={{ m: 0, width: 305 }}>
              <InputLabel id="demo-multiple-name-label">Services</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={myServices}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {serviceNames.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={12} sm={7.5}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">NUM OF Days</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={numberOfDays}
              label="Number of Days"
              onChange={handleNumberOfdays}
            >
              <MenuItem value={0}>SELECT</MenuItem>
              <MenuItem value={1}>ONE</MenuItem>
              <MenuItem value={2}>TWO</MenuItem>
              <MenuItem value={3}>THREE</MenuItem>
            </Select>
          </FormControl>
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
