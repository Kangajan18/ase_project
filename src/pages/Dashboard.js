import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Swal from "sweetalert2";
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
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { Button } from "@mui/material";

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

const user = JSON.parse(localStorage.getItem("user"));

function DashboardContent() {
  const [isSingleRoom, setIsSingleRoom] = useState(true);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
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
              sx={{ flexGrow: 1 }}
            >
              Welcome to Lotus
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <p
                  style={{ display: "flex" }}
                  onClick={() => {
                    Swal.fire("Logout!", "Are you want to logout?", "question");
                  }}
                >
                  <PersonIcon />
                  <h4 style={{ marginLeft: 5 }}>{user.firstName}</h4>
                </p>
              </Badge>
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
                    setIsSingleRoom(true);
                  }}
                >
                  Rooms
                </button>
              </div>

              <div style={{ alignItems: "center", marginLeft: 35 }}>
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
                    setIsSingleRoom(false);
                  }}
                >
                  Villa
                </button>
              </div>
              <div style={{ alignItems: "center", marginLeft: 35 }}>
                <a
                  href="/myReservation"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <button
                    style={{
                      width: 120,
                      height: 50,
                      borderRadius: 10,
                      color: "white",
                      backgroundColor: "#0277BD",
                      border: "none",
                      marginTop: 50,
                    }}
                  >
                    My Reseravtion
                  </button>
                </a>
              </div>
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
                    {isSingleRoom == true ? (
                      <div id="rooms">
                        <div
                          style={{
                            width: 770,
                            height: 200,
                            backgroundColor: "transparent",
                            marginBottom: 20,
                            display: "flex",
                            flexWrap: "wrap",
                            position: "relative",
                          }}
                        >
                          <div
                            id="imagePart"
                            style={{
                              width: 250,
                              height: 200,
                              paddingTop: 15,
                              backgroundColor: "black",
                              backgroundImage:
                                "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80')",
                              backgroundRepeat: "no-repeat no-repeat",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h2
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              marginLeft: 11,
                            }}
                          >
                            King Room
                          </h2>
                          <h4
                            style={{
                              letterSpacing: 2,
                              wordSpacing: 3,
                              flexWrap: "wrap",
                              position: "absolute",
                              color: "black",
                              transform: "translateX(58%) translateY(260%)",
                            }}
                          >
                            A room with a king-sized bed. one or more people.
                          </h4>
                          <button
                            style={{
                              height: 40,
                              width: 90,
                              borderRadius: 12,
                              backgroundColor: "#0277BD",
                              border: "none",
                              color: "white",
                              fontSize: 18,
                              transform: "translateX(320%) translateY(380%)",
                            }}
                            onClick={() => {
                              onPrint("king Room");
                            }}
                          >
                            Book
                          </button>
                        </div>
                        <div
                          style={{
                            width: 770,
                            height: 200,
                            backgroundColor: "transparent",
                            marginBottom: 20,
                            display: "flex",
                            flexWrap: "wrap",
                            position: "relative",
                          }}
                        >
                          <div
                            id="imagePart"
                            style={{
                              width: 250,
                              height: 200,
                              paddingTop: 15,
                              backgroundColor: "black",
                              backgroundImage:
                                "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80')",
                              backgroundRepeat: "no-repeat no-repeat",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h2
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              marginLeft: 11,
                            }}
                          >
                            Double Room
                          </h2>
                          <h4
                            style={{
                              letterSpacing: 2,
                              wordSpacing: 3,
                              flexWrap: "wrap",
                              position: "absolute",
                              color: "black",
                              transform: "translateX(58%) translateY(260%)",
                            }}
                          >
                            A room assigned to two people. one or more beds.
                          </h4>
                          <button
                            style={{
                              height: 40,
                              width: 90,
                              borderRadius: 12,
                              backgroundColor: "#0277BD",
                              border: "none",
                              color: "white",
                              fontSize: 18,
                              transform: "translateX(290%) translateY(380%)",
                            }}
                            onClick={() => {
                              onPrint("Double Room");
                            }}
                          >
                            Book
                          </button>
                        </div>
                        <div
                          style={{
                            width: 770,
                            height: 200,
                            backgroundColor: "transparent",
                            marginBottom: 20,
                            display: "flex",
                            flexWrap: "wrap",
                            position: "relative",
                          }}
                        >
                          <div
                            id="imagePart"
                            style={{
                              width: 250,
                              height: 200,
                              paddingTop: 15,
                              backgroundColor: "black",
                              backgroundImage:
                                "url('https://www.novaplazahotels.com/novaplazacrystal/wp-content/uploads/2020/05/triple-1.jpg')",
                              backgroundRepeat: "no-repeat no-repeat",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h2
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              marginLeft: 11,
                            }}
                          >
                            Triple Room
                          </h2>
                          <h4
                            style={{
                              letterSpacing: 2,
                              wordSpacing: 3,
                              flexWrap: "wrap",
                              position: "absolute",
                              color: "black",
                              transform: "translateX(58%) translateY(260%)",
                            }}
                          >
                            A room assigned to three people.two or more beds.
                          </h4>
                          <button
                            style={{
                              height: 40,
                              width: 90,
                              borderRadius: 12,
                              backgroundColor: "#0277BD",
                              border: "none",
                              color: "white",
                              fontSize: 18,
                              transform: "translateX(310%) translateY(380%)",
                            }}
                            onClick={() => {
                              onPrint("Triple Room");
                            }}
                          >
                            Book
                          </button>
                        </div>

                        <div>
                          <a href="/booking">
                            <button
                              style={{
                                height: 40,
                                width: 90,
                                borderRadius: 12,
                                backgroundColor: "yellow",
                                border: "none",
                                color: "black",
                                fontSize: 18,
                                transform: "translateX(750%) translateY(80%)",
                              }}
                              onClick={() => {
                                onPrint("Triple Room");
                              }}
                            >
                              Next
                            </button>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div id="villas">
                        <div
                          style={{
                            width: 770,
                            height: 200,
                            backgroundColor: "transparent",
                            marginBottom: 20,
                            display: "flex",
                            flexWrap: "wrap",
                            position: "relative",
                          }}
                        >
                          <div
                            id="imagePart"
                            style={{
                              width: 250,
                              height: 200,
                              paddingTop: 15,
                              backgroundColor: "black",
                              backgroundImage:
                                "url('https://cf.bstatic.com/xdata/images/hotel/max500/226783010.jpg?k=9654e8ee9e4cd4a4fa667e8ba2c85f237e4384ef63e387d17872318322edfed8&o=&hp=1')",
                              backgroundRepeat: "no-repeat no-repeat",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h2
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              marginLeft: 11,
                            }}
                          >
                            Natural Villa
                          </h2>
                          <h4
                            style={{
                              letterSpacing: 2,
                              wordSpacing: 3,
                              flexWrap: "wrap",
                              position: "absolute",
                              color: "black",
                              transform: "translateX(95%) translateY(260%)",
                            }}
                          >
                            The Nature Villa and Cabanas.
                          </h4>
                          <button
                            style={{
                              height: 40,
                              width: 90,
                              borderRadius: 12,
                              backgroundColor: "#0277BD",
                              border: "none",
                              color: "white",
                              fontSize: 18,
                              transform: "translateX(300%) translateY(380%)",
                            }}
                          >
                            Book
                          </button>
                        </div>
                        <div
                          style={{
                            width: 770,
                            height: 200,
                            backgroundColor: "transparent",
                            marginBottom: 20,
                            display: "flex",
                            flexWrap: "wrap",
                            position: "relative",
                          }}
                        >
                          <div
                            id="imagePart"
                            style={{
                              width: 250,
                              height: 200,
                              paddingTop: 15,
                              backgroundColor: "black",
                              backgroundImage:
                                "url('https://amazingarchitecture.com/storage/files/1/architecture-firms/amin-moazzen/black-fly/black_house_amin_moazzen_bangal_india-3.jpg')",
                              backgroundRepeat: "no-repeat no-repeat",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h2
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              marginLeft: 11,
                            }}
                          >
                            Modern Villa
                          </h2>
                          <h4
                            style={{
                              letterSpacing: 2,
                              wordSpacing: 3,
                              flexWrap: "wrap",
                              position: "absolute",
                              color: "black",
                              transform: "translateX(67%) translateY(260%)",
                            }}
                          >
                            Explore Mohamed O's board "Modern villas".
                          </h4>
                          <button
                            style={{
                              height: 40,
                              width: 90,
                              borderRadius: 12,
                              backgroundColor: "#0277BD",
                              border: "none",
                              color: "white",
                              fontSize: 18,
                              transform: "translateX(290%) translateY(380%)",
                            }}
                          >
                            Book
                          </button>
                        </div>
                        <div
                          style={{
                            width: 770,
                            height: 200,
                            backgroundColor: "transparent",
                            marginBottom: 20,
                            display: "flex",
                            flexWrap: "wrap",
                            position: "relative",
                          }}
                        >
                          <div
                            id="imagePart"
                            style={{
                              width: 250,
                              height: 200,
                              paddingTop: 15,
                              backgroundColor: "black",
                              backgroundImage:
                                "url('https://amazingarchitecture.com/storage/files/1/architecture-firms/amir-abbas-abibi/combination-villa/03-combination-villa-amir-abbas-habibi-new-york-usa.jpg')",
                              backgroundRepeat: "no-repeat no-repeat",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h2
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              marginLeft: 11,
                            }}
                          >
                            Combinative Villa
                          </h2>
                          <h4
                            style={{
                              letterSpacing: 2,
                              wordSpacing: 3,
                              flexWrap: "wrap",
                              position: "absolute",
                              color: "black",
                              transform: "translateX(67%) translateY(260%)",
                            }}
                          >
                            USA exterior and interior design by Habibi.
                          </h4>
                          <button
                            style={{
                              height: 40,
                              width: 90,
                              borderRadius: 12,
                              backgroundColor: "#0277BD",
                              border: "none",
                              color: "white",
                              fontSize: 18,
                              transform: "translateX(235%) translateY(380%)",
                            }}
                          >
                            Book
                          </button>
                        </div>
                      </div>
                    )}
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

export default function Dashboard() {
  return <DashboardContent />;
}
