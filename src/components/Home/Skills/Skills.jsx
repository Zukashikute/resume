import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";
import SkillsBg from "../../../assets/img/home-skillsBg.jpg";
import { Skills } from "../../../constant/Skills";
import ComputerIcon from "@mui/icons-material/Computer";

const SkillsInfo = () => {
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
        backgroundColor: "#D1D3DB",
        backgroundImage: desktopView ? `url(${SkillsBg})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "220px 220px",
        backgroundPosition: "bottom right",
        overflow: "hidden",
      }}
    >
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
            color="black"
          >
            Skills
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
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.75,
          delay: 1.75,
        }}
      >
        <List sx={{ paddingY: 2 }}>
          {Skills.map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              whileHover={{ x: 25 }}
              style={{ cursor: "pointer" }}
            >
              <ListItem sx={{ paddingY: 0, alignItems: "start" }}>
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <ComputerIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText sx={{ marginY: "2px" }}>{skill}</ListItemText>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </motion.div>
    </Box>
  );
};

export default SkillsInfo;
