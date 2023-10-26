// import { Box } from "@mui/material";
import Header from "../../components/Header";
// import { BarChart, DoughnutChart } from "./Charts";
import CompanyAnalytics from "./CompanyAnalytics";

function CompanyDashboard() {
  return (
    <>
      <Header />
      <CompanyAnalytics />
      {/* <Box
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
        <DoughnutChart />
        <BarChart />
      </Box> */}
    </>
  );
}

export default CompanyDashboard;
