import { Box, Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#7B55FF",
        padding: "3em 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box sx={{ width: "70%", marginTop: "5em", marginBottom: "6em" }}>
        <Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: "fantasy",
              letterSpacing: "2px",
              lineHeight: "80px",
              fontSize: { xs: "6em", md: "7em", lg: "7.2em" },
              color: "#000000",
            }}
          >
            KNOWNET
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontFamily: "cursive",
              textAlign: "center",
              fontStyle: "italic",
              color: "#DCD8F8",
              marginTop: "14px",
            }}
          >
            Knowledge Without Barriers
          </Typography>
        </Box>
        <Box sx={{ marginTop: "4em" }}>
          <Typography
            variant="p"
            component="p"
            sx={{
              fontSize: { sm: "1.6rem", md: "1.7rem", lg: "1.7rem" },
              color: "#000000",
              fontWeight: "800",
            }}
          >
            KnowNet introduces a revolutionary conversational SMS based Google
            search designed to address information disparities in Africa.
          </Typography>
          <a
            href="sms:22881?body=Hello KnowNet"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginTop: "4em",
                boxShadow: "none",
                backgroundColor: "#DCD8F8",
                color: "#000000",
                "&:hover": {
                  backgroundColor: "#000000",
                  color: "#DCD8F8",
                },
              }}
            >
              Get Started
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
