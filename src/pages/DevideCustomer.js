import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import "./DevideCustomer.css";
import { useState } from "react";
function DevideCustomer() {
  const [customerType, setcustomerType] = useState("");
  return (
    <div
      style={{
        width: 1360,
        height: 900,
        backgroundColor: "#041014",
        display: "flex",
        color: "white",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: 850,
          height: 500,
          alignItems: "center",
          marginTop: "70px",
          display: "flex",
          justifyContent: "space-evenly",
          border: "none",
        }}
      >
        <a
          href="/customerSignUp"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div
            id="container"
            style={{
              width: 300,
              height: 450,

              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "none",
            }}
            onClick={() => {
              setcustomerType("SimpleCustomer");
              localStorage.setItem("customerType", "Simple Customer");
            }}
          >
            <PersonIcon style={{ width: 100, height: 100, marginTop: 65 }} />
            <h3
              style={{ marginTop: 50, fontFamily: "sans-serif", fontSize: 22 }}
            >
              Simple User
            </h3>
            <p
              style={{
                letterSpacing: 2,
                wordSpacing: 2,
                textAlign: "center",
                padding: 20,
                marginTop: 40,
              }}
            >
              This option completly for simple user. you can book multiple rooms
              or villa for your purpose only.
            </p>
          </div>
        </a>
        <a
          href="/travelAgentSignUp"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div
            id="container"
            style={{
              width: 300,
              height: 450,
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => {
              setcustomerType("Traval Agent");
              localStorage.setItem("customerType", "Traval Agent");
            }}
          >
            <GroupsIcon style={{ width: 100, height: 100, marginTop: 65 }} />
            <h3
              style={{ marginTop: 50, fontFamily: "sans-serif", fontSize: 22 }}
            >
              Travel Company
            </h3>
            <p
              style={{
                letterSpacing: 2,
                wordSpacing: 2,
                textAlign: "center",
                padding: 20,
                marginTop: 40,
              }}
            >
              This option completly for Travel Company. you can book multiple
              rooms or villa for your company purpose.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default DevideCustomer;
