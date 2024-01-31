import React, { useEffect } from "react";
import PersonalInfo from "../../components/Home/PersonalInfo/PersonalInfo";
import { Box } from "@mui/material";
import Educ from "../../components/Home/Education/Educ";
import WorkExp from "../../components/Home/Work/WorkExp";
import Skills from "../../components/Home/Skills/Skills";
import Footer from "../../components/Footer";

const Home = () => {
  useEffect(() => {
    window.addEventListener("resize", function () {
      window.location.reload();
    });
  }, []);

  return (
    <Box sx={{ height: "100%", background: (theme) => theme.palette.gradient }}>
      <Box
        sx={{
          width: { mini: "100%", lg: "80%", xxl: "60%" },
          marginX: "auto",
        }}
      >
        <PersonalInfo />

        <Educ />

        <WorkExp />

        <Skills />

        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
