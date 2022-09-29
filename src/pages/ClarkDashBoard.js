import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Person4Icon from "@mui/icons-material/Person4";
import { useState } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ReservationList from "./ReservationList";
import CustomerList from "./CustomerList";
import Report from "./Report";
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
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

export default function ClarkDashBoard() {
  const [buttonSelect, setButtonSelect] = useState(0);

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleButtonClick = (number) => {
    setButtonSelect(number);
    console.log("number = " + buttonSelect);
    return buttonSelect;
  };

  const onPrint = (name) => {
    console.log(name);
    setroomType(name);
    localStorage.setItem("items", JSON.stringify(roomType));
  };

  const [roomType, setroomType] = useState("");

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherite"
              noWrap
              sx={{ flexGrow: 1, alignItems: "center" }}
            >
              <Person4Icon />
              Clark DASHBOARD
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary"></Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <div
              style={{
                backgroundColor: "transparent",
                width: 180,
                height: 400,
                marginTop: 120,
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  marginLeft: 35,
                  marginBottom: 50,
                  marginTop: 120,
                }}
              >
                <button
                  style={{
                    width: 120,
                    height: 50,
                    borderRadius: 10,
                    color: "white",
                    backgroundColor: "#0277BD",
                    border: "none",
                  }}
                  onClick={() => {
                    handleButtonClick(0);
                  }}
                >
                  Reservation
                </button>
              </div>

              {/* <div style={{ alignItems: "center", marginLeft: 35 }}>
                <button
                  style={{
                    width: 120,
                    height: 50,
                    borderRadius: 10,
                    color: "white",
                    backgroundColor: "#0277BD",
                    border: "none",
                  }}
                  onClick={() => {
                    handleButtonClick(1);
                  }}
                >
                  Customer
                </button>
              </div> */}
            </div>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>

          <Divider />

          <List component="nav">
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 1240,
                  }}
                >
                  <div className="contentPart">
                    {(() => {
                      switch (buttonSelect) {
                        case 0:
                          console.log("Reservation");
                          return <ReservationList />;
                        case 1:
                          return <CustomerList />;
                        case 2:
                          return <Report />;
                        default:
                          return null;
                      }
                    })()}
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
