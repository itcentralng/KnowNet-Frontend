import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../assets/KNOWNET.png";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        // border: "1px solid green",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#bdbbbb",
        boxShadow: "none",
        padding: "0 .2em",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={logo}
            style={{
              // mr: 2,
              // display: { xs: "none", md: "flex" },
              // fontFamily: "monospace",
              // fontWeight: 700,
              // letterSpacing: ".3rem",
              // color: "inherit",
              // textDecoration: "none",
              width: "6em",
            }}
          />

          {/* <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#bdbbbb"
              sx={{ color: "#065F73" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    // sx={{ border: "1px solid red" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              maxWidth: "55%",
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "#065F73",
                display: "block",
                backgroundColor: "#transparent",
                "&:hover": {
                  backgroundColor: "#3858c",
                },
              }}
            >
              {/* <a href="" style={{ textDecoration: "none", color: "#065F73" }}> */}
              About
              {/* </a> */}
            </Button>
            <Button
              sx={{
                my: 2,
                color: "#065F73",
                display: "block",
                backgroundColor: "#transparent",
                "&:hover": {
                  backgroundColor: "#3858c",
                },
              }}
            >
              {/* <a href="" style={{ textDecoration: "none", color: "#065F73" }}> */}
              How to Use
              {/* </a> */}
            </Button>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  my: 2,
                  color: "#065F73",
                  display: "block",
                  backgroundColor: "#transparent",
                  "&:hover": {
                    backgroundColor: "#3858c",
                  },
                }}
              >
                {/* <a href="" style={{ textDecoration: "none", color: "#065F73" }}> */}
                Contact Us
                {/* </a> */}
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  my: 2,
                  color: "#065F73",
                  display: "block",
                  backgroundColor: "#transparent",
                  "&:hover": {
                    backgroundColor: "#3858c",
                  },
                }}
              >
                {/* <a href="" style={{ textDecoration: "none", color: "#065F73" }}> */}
                For Adverts
                {/* </a> */}
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <a
              href="sms:22881?body=Hello KnowNet"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  backgroundColor: "#065F73",
                  color: "#bdbbbb",
                  "&:hover": {
                    backgroundColor: "#bdbbbb",
                    color: "#065F73",
                  },
                }}
              >
                Get Started
              </Button>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
