import { Box } from "@mui/material";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Tutorial from "./Tutorial";

function Landing() {
  return (
    <Box sx={{ color: "#DCD8F8" }}>
      <Header />
      <Hero />
      <About />
      <Tutorial />
    </Box>
  );
}

export default Landing;
