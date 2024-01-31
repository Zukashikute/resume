import React, { useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery, Divider } from "@mui/material";
import { Education } from "../../../constant/Education";
import EducInfo from "./EducInfo";
import EducBg from "../../../assets/img/home-educBg.jfif";
import { motion, useInView, useAnimation } from "framer-motion";

const Educ = () => {
  const ref = useRef();
  const desktopView = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${EducBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.6)",
            position: "absolute",
            width: "100%",
            minHeight: "900px",
          }}
        />
      </Box>

      <Box
        ref={ref}
        sx={{
          padding: { mini: 1.5, xs: 2 },
          position: "relative",
          width: "max-content",
        }}
      >
        <motion.div
          variants={{
            hidden: { scale: 0 },
            visible: { rotate: 360, scale: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.75,
            delay: 0.75,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <Typography
            variant={desktopView ? "h4" : "h5"}
            sx={{ fontFamily: "Bree Serif" }}
            color="white"
          >
            Education
          </Typography>
        </motion.div>
      </Box>

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.75,
          delay: 0.75,
        }}
      >
        <Divider
          sx={{
            borderBottomWidth: "medium",
            borderColor: "white",
            position: "relative",
          }}
        />
      </motion.div>

      <Box sx={{ position: "relative" }}>
        {Education?.map((educ, index) => (
          <EducInfo
            key={`school_${index}`}
            schoolName={educ.schoolName}
            majorTitle={educ.majorTitle}
            schoolPlace={educ.schoolPlace}
            startDate={educ.startDate}
            endDate={educ.endDate}
            schoolDescription={educ.schoolDescription}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Educ;
