import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";

import WorkIcon from "@mui/icons-material/Work";

const WorkInfo = ({
  index,
  companyName,
  workTitle,
  workPlace,
  startDate,
  endDate,
  workDescription,
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const desktopView = useMediaQuery((theme) => theme.breakpoints.up("xs"));

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <Box
      sx={{
        paddingX: { mini: 2, xs: 2.5 },
        paddingY: { mini: 1, xs: 1.25 },
      }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.75,
          delay: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { mini: "column", xs: "row" },
            gap: { mini: "0.5rem", xs: 0 },
          }}
        >
          <Box>
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant={desktopView ? "h5" : "h6"}
                sx={{
                  lineHeight: 1.25,
                  marginBottom: "0.25rem",
                  fontFamily: "Marko One",
                }}
              >
                {companyName}
              </Typography>
              <Typography
                variant={desktopView ? "h6" : "subtitle1"}
                sx={{
                  lineHeight: 1,
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                {workTitle}
              </Typography>
            </motion.div>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              flexDirection: "column",
            }}
          >
            {startDate && endDate && (
              <Box>
                <Typography
                  variant={desktopView ? "body1" : "body2"}
                  sx={{
                    textShadow: {
                      md: index === 0 ? "0.8px 0.5px #ffffff" : "none",
                    },
                  }}
                >
                  {startDate} - {endDate}
                </Typography>
              </Box>
            )}
            <Typography
              variant={desktopView ? "body1" : "body2"}
              sx={{
                textShadow: {
                  md: index === 0 ? "0.8px 0.5px #ffffff" : "none",
                },
              }}
            >
              {workPlace}
            </Typography>
          </Box>
        </Box>
      </motion.div>

      <Box>
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
          <List>
            {workDescription?.map((description, index) => (
              <motion.div
                key={`workDesc-${index}`}
                whileHover={{ x: 25 }}
                style={{ cursor: "pointer" }}
              >
                <ListItem sx={{ paddingY: 0, alignItems: "start" }}>
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <WorkIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ marginY: "2px" }}>
                    {description}
                  </ListItemText>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </motion.div>
      </Box>
    </Box>
  );
};

export default WorkInfo;
