import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";

export default function PaymentForm() {
  const [cardName, setcardName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [exDate, setexDate] = useState("");
  const [cvv, setCvv] = useState("");

  const onPrintValue = () => {
    const cardDetails = {
      cardName: cardName,
      cardNumber: cardNumber,
      exDate: exDate,
      cvv: cvv,
    };
    Swal.fire("Welcome!", "Your card details saved!", "success");

    localStorage.setItem("card", JSON.stringify(cardDetails));
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(e) => {
              setcardName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e) => {
              setcardNumber(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={(e) => {
              setexDate(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={(e) => {
              setCvv(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ mt: 3, ml: 0 }}
            onClick={onPrintValue}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
