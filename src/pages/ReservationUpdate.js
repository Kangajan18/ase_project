import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import UpdateIcon from "@mui/icons-material/Update";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        kangs(pvt)
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ReservationUpdate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checkIn, setCheckIn] = useState(new Date());

  const onSubmitHandle = () => {
    console.log(firstName, lastName, nic, phone, email, password);

    Swal.fire("UPDATED!", "Succesfully Updated!", "success");

    axios
      .post("http://localhost:8080/api/user/save", {
        firstName: firstName,
        lastName: lastName,
        nic: nic,
        phoneNumber: phone,
        email: email,
        customerType: "Simple user",
        role: "customer",
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1DB954" }}>
            <UpdateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reservation Update
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="customerName"
                  required
                  fullWidth
                  id="customerName"
                  label="Customer Name"
                  autoFocus
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="roomNumber"
                  label="Room Number"
                  name="roomNumber"
                  autoComplete="family-name"
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: 30 }}>CheckIn</p>
                  <DatePicker
                    selected={checkIn}
                    onChange={(date: Date) => setCheckIn(date)}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="daysCount"
                  label="Days Count"
                  name="daysCount"
                  autoComplete="daysCount"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="status"
                  label="Status"
                  name="status"
                  autoComplete="status"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="amount"
                  label="Amount"
                  id="amount"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmitHandle}
              sx={{ mt: 1, bgcolor: "#1DB954" }}
            >
              Update
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
