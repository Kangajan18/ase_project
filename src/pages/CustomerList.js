import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Kangajan",
    "991392963V",
    "0765431213",
    "Simple Customer",
    "kangajan@email.com"
  ),
  createData(
    "Gobi",
    "991434333V",
    "0776541296",
    "Simple Customer",
    "gobi@email.com"
  ),
  createData(
    "Shalini",
    "991444463V",
    "0752627193",
    "Travel Agent",
    "shalini@email.com"
  ),
  createData(
    "Aranya",
    "991434963V",
    "0765411213",
    "Simple Customer",
    "aranya@email.com"
  ),
  createData(
    "Hirunika",
    "993943233V",
    "0729383728",
    "Simple Customer",
    "hirunika@email.com"
  ),
];
function CustomerList() {
  return (
    <div>
      <a
        href="/customerSignUp"
        style={{ textDecoration: "none", color: "white" }}
      >
        <div
          style={{
            width: 270,
            height: 85,
            backgroundColor: "lightgreen",
            borderRadius: 12,
            textAlign: "center",
            alignItems: "center",
            color: "white",
            fontSize: 20,
            marginLeft: 470,
          }}
        >
          <h3 style={{ paddingTop: 25 }}>Add New Customer</h3>
        </div>
      </a>

      <h1>Customer List</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell align="right">Nic Number</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Customer Type</TableCell>
              <TableCell align="right">Email</TableCell>
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
                <div
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
                    onClick={() => {
                      Swal.fire(
                        "Deleted",
                        "User Deleted Successfully!",
                        "success"
                      );
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomerList;
