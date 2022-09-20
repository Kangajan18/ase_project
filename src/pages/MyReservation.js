import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  amount: number
) {
  return { name, calories, fat, carbs, protein, amount };
}

const rows = [createData("Kangajan", 159, "12/09/2022", 3, "Paid", 5000)];
function MyReservation() {
  return (
    <div>
      <div style={{ width: 1400, height: 60, backgroundColor: "#4285F4" }}>
        <h1
          style={{
            color: "white",
            alignItems: "center",
            paddingTop: 10,
            marginLeft: 5,
          }}
        >
          Lotus Restorent
        </h1>
      </div>
      <div style={{ border: "10px solid black", padding: 25, margin: 25 }}>
        <h1>My Reservation List</h1>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell align="right">Room Number</TableCell>
                <TableCell align="right">CheckIn</TableCell>
                <TableCell align="right">Days Count</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 6,
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        marginRight: 10,
                        border: "2px solid #1DB954",
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      style={{
                        border: "2px solid #DB4437",
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                    >
                      Cancel
                    </Button>
                  </div> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default MyReservation;
