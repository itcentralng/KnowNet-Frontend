import { Box, Paper, Typography } from "@mui/material";
import { BarChart } from "./Charts";

function CompanyAnalytics() {
  return (
    <Box sx={{ marginLeft: { md: "250px" }, marginTop: "2em" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            flexWrap: "wrap",
          }}
        >
          <Paper
            sx={{
              minWidth: "2em",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2em 1em",
              backgroundColor: "#8ECDE7",
              borderRadius: "10px",
            }}
          >
            <Typography variant="body2" component="p" sx={{ fontSize: "3rem" }}>
              10
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ fontSize: "1.5rem" }}
            >
              BASIC USERS
            </Typography>
          </Paper>

          <Paper
            sx={{
              minWidth: "2em",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2em 1em",
              backgroundColor: "#DCED75",
              borderRadius: "10px",
            }}
          >
            <Typography variant="body2" component="p" sx={{ fontSize: "3rem" }}>
              10
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ fontSize: "1.5rem" }}
            >
              PREMIUM USERS
            </Typography>
          </Paper>

          <Paper
            sx={{
              minWidth: "2em",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2em 1em",
              backgroundColor: "#84E8BE",
              borderRadius: "10px",
            }}
          >
            <Typography variant="body2" component="p" sx={{ fontSize: "3rem" }}>
              5
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ fontSize: "1.5rem" }}
            >
              ADVERTISERS
            </Typography>
          </Paper>
        </Box>
      </Box>
      <Box
        sx={{
          height: "20em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "50%",
          marginLeft: "250px",
        }}
      >
        <BarChart />
      </Box>
    </Box>
  );
}

export default CompanyAnalytics;
