import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const booking = JSON.parse(localStorage.getItem("data"));
const card = JSON.parse(localStorage.getItem("card"));
const user = JSON.parse(localStorage.getItem("user"));

export default function Review() {
  const [isCard, setisCard] = useState(false);
  const onPrintValue = () => {
    //checkin
    //checkout
    //rentAmount
    //serviceCharge
    //paymentType
    //isPayed
    //booking date
    //services

    if (card != null) {
      setisCard(true);
      console.log(isCard);
    } else {
      setisCard(false);
    }
    const reservation = {
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      totalAmount: amount,
      date: new Date(),
      isPayed: isCard,
      paymentType: isCard === true ? "Card" : "Cash",
      services: booking.services,
      userId: user,
    };

    Swal.fire("Good Job!", "You are Succesfully Booked!", "success");

    axios
      .post("http://localhost:8080/api/reservation/saveReservation", {
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        date: new Date(),
        isPayed: isCard,
        paymentType: isCard === true ? "Card" : "Cash",
        services: booking.services,
        totalAmount: amount,
        userId: user,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  let amount = 0;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Invoice
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Number of Rooms" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, textAlign: "center", marginRight: 30 }}
          >
            {booking.numberOfRooms}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            18000/=
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Services" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, textAlign: "center", marginRight: 20 }}
          >
            {booking.services.map((service) => (
              <li>{service}</li>
            ))}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            800/=
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="AC" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, textAlign: "center", marginRight: 29 }}
          >
            {booking.Ac.toString()}
          </Typography>

          {booking.Ac == true ? (
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              300/=
            </Typography>
          ) : (
            ""
          )}
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Number of Days" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, textAlign: "center", marginRight: 32 }}
          >
            {booking.numberOfDays}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}></Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Payment" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, textAlign: "center", marginRight: 20 }}
          >
            {booking.card == true ? "Card Payment" : "Cash Payment"}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}></Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, textAlign: "center", marginRight: 20 }}
          >
            {(() => {
              switch (booking.roomType) {
                case '"king Room"':
                  amount = 5000 * booking.numberOfRooms * booking.numberOfDays;
                  {
                    booking.services.map((service) => {
                      if (service === "Food service") {
                        amount = booking.numberOfDays * 3 * 600;
                      } else if (service == "Vehicle service") {
                        amount = booking.numberOfDays * 400;
                      } else if (service == "Room service") {
                        amount = booking.numberOfDays * 200;
                      } else {
                        amount = amount;
                      }
                    });
                  }
                  return (
                    <h3
                      style={{
                        textAlign: "end",
                        marginLeft: 420,
                        marginTop: 15,
                      }}
                    >
                      19100/=
                    </h3>
                  );
                  break;
                case '"Double Room"':
                  amount = 3000 * booking.numberOfRooms * booking.numberOfDays;
                  {
                    booking.services.map((service) => {
                      if (service === "Food service") {
                        amount = booking.numberOfDays * 3 * 600;
                      } else if (service == "Vehicle service") {
                        amount = booking.numberOfDays * 400;
                      } else if (service == "Room service") {
                        amount = booking.numberOfDays * 200;
                      } else {
                        amount = amount;
                      }
                    });
                  }
                  return <h3>{amount}</h3>;
                  break;
                case '"Triple Room"':
                  amount = 6500 * booking.numberOfRooms * booking.numberOfDays;
                  {
                    booking.services.map((service) => {
                      if (service === "Food service") {
                        amount = booking.numberOfDays * 3 * 600;
                      } else if (service == "Vehicle service") {
                        amount = booking.numberOfDays * 400;
                      } else if (service == "Room service") {
                        amount = booking.numberOfDays * 200;
                      } else {
                        amount = amount;
                      }
                    });
                  }
                  return <h3>{amount}</h3>;
                  break;
                default:
                  return null;
              }
            })()}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}></Typography>
        </ListItem>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ mt: 3, ml: 0 }}
            onClick={onPrintValue}
          >
            Save
          </Button>
        </Grid>
      </List>
      <Grid container spacing={1}></Grid>
    </React.Fragment>
  );
}
