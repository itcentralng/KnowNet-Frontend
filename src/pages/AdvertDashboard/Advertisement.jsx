import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Advertisement() {
  const [formData, setFormData] = React.useState({
    topic: "",
    number: 0,
    advertMessage: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData, "has been submitted succesfully");
  }

  return (
    <Box sx={{ marginLeft: "250px", marginTop: "2em" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginBottom: "2em" }}
        >
          ADVERTISER DASHBOARD
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="topic">Topic of Advertisement</label>
            <input
              id="topic"
              type="text"
              placeholder="Type here"
              onChange={handleChange}
              name="topic"
              value={formData.topic}
              style={{ marginBottom: "4em", width: "90%" }}
            />{" "}
            <br />
            <label htmlFor="num">Number of Adertisements to send</label>
            <input
              id="num"
              type="number"
              placeholder="input number"
              onChange={handleChange}
              name="number"
              value={formData.number}
              style={{ marginBottom: "4em", width: "90%" }}
            />{" "}
            <br />
            <label htmlFor="adMessage">Type your Advertisement Message</label>
            <textarea
              id="adMessage"
              type="text"
              placeholder="Advert message"
              onChange={handleChange}
              name="advertMessage"
              value={formData.advertMessage}
              style={{ marginBottom: "1em", width: "90%" }}
            />{" "}
            <br />
            <Button type="submit" variant="contained" sx={{ width: "90%" }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Advertisement;
