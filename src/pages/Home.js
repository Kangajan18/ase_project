import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Home.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        kangs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{ backgroundColor: "black" }}>
          <div
            style={{
              backgroundImage:
                "url('https://cdn-icons-png.flaticon.com/512/2982/2982182.png')",
              backgroundRepeat: "no-repeat no-repeat",
              backgroundSize: "cover",
              width: 50,
              height: 50,
              marginRight: 15,
            }}
          ></div>
          <Typography variant="h6" color="white" noWrap>
            LOTUS RESTAURANT
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div
          id="backgroudimage"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/romantic-beach-dinner-sunset-anniversary-honeymoon-destination-dining-candles-lights_663265-2589.jpg?w=740')",
            backgroundRepeat: "no-repeat no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              pt: 8,
              pb: 36,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="white"
                gutterBottom
                style={{
                  fontWeight: "bolder",
                  letterSpacing: 2,
                  wordSpacing: 2,
                  color: "black",
                }}
              >
                LOTUS RESTAURANT
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="white"
                paragraph
                style={{ opacity: 1 }}
              >
                Spread across the length and breadth of our tropical island, our
                homes of Sri Lankan hospitality invite you to indulge in our
                signature brand of luxury, brought to life with the strength of
                our well-rooted family values. No matter where you may find
                yourself in Sri Lanka, our doors will always be open.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "black" }}
                >
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    SignUp
                  </a>
                </Button>
                <Button
                  variant="outlined"
                  style={{ color: "black", border: "2px solid black" }}
                >
                  <a
                    href="/devideCustomer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    SignIn
                  </a>
                </Button>
              </Stack>
            </Container>
          </Box>
        </div>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          kangs(pvt)lotus
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          enjoy...
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
