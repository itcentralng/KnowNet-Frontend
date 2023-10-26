import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import knownetLogo from "../../assets/KNOWNET.png";
import userLogo from "../../assets/userLogo.svg";
import SideNav from "./SideNav";

function Header() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              height: "5em",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { sm: "100%", md: "100%" },
              marginLeft: "auto",
            }}
          >
            <Box sx={{ width: "5%" }}>
              <SideNav />
            </Box>
            <Box
              sx={{
                width: "10em",
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <img src={knownetLogo} style={{ width: "100%" }} />
            </Box>
            <Box
              sx={{
                width: "10em",
                display: { sm: "flex", md: "none" },
              }}
            >
              <img src={knownetLogo} style={{ width: "100%" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body2" component="h4" mr={1}>
                Usman Ramalan
              </Typography>

              <Box sx={{ flexGrow: 0 }}>
                <IconButton>
                  <Avatar src={userLogo} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Header;
