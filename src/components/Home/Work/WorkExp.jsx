import React, { useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery, Divider } from "@mui/material";
import { Works } from "../../../constant/Work";
import WorkInfo from "./WorkInfo";
import WorkBg from "../../../assets/img/home-workBg.jpg";
import { motion, useInView, useAnimation } from "framer-motion";

const WorkExp = () => {
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
        backgroundImage: `url(${WorkBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
      ref={ref}
    >
      <Box sx={{ padding: { mini: 1.5, xs: 2 }, width: "max-content" }}>
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
          >
            Work Experience
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
        transition={{ duration: 0.75, delay: 0.75 }}
      >
        <Divider sx={{ borderBottomWidth: "medium", borderColor: "black" }} />
      </motion.div>

      <Box>
        {Works?.map((work, index) => (
          <WorkInfo
            index={index}
            key={`work_${index}`}
            companyName={work.companyName}
            workTitle={work.workTitle}
            workPlace={work.workPlace}
            startDate={work.startDate}
            endDate={work.endDate}
            workDescription={work.workDescription}
          />
        ))}
      </Box>
    </Box>
  );
};

export default WorkExp;
