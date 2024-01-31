import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

// Mui Components
import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";

// Images
import Self from "../../../assets/img/Self.jpg";

const PersonalInfo = () => {
  const desktopView = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const xlView = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <Box
      ref={ref}
      sx={{
        padding: { mini: 2, sm: 3 },
        background: (theme) => theme.palette.tertiary.darkest,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "0.75rem",
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <Avatar
            src={Self}
            alt=""
            variant="rounded"
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: 120,
              maxHeight: 120,
            }}
          />
        </motion.div>
        <Box>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            <Typography
              color="white"
              sx={{
                fontFamily: "Bree Serif",
                fontSize: {
                  mini: "1.75rem",
                  // xs: "2rem",
                  sm: "2.75rem",
                  lg: "3rem",
                },
                lineHeight: 1,
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              Jared Joshua Balajadia
            </Typography>
          </motion.div>

          <AnimatePresence>
            {desktopView && (
              <motion.div
                key="large-info"
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.75, delay: 0.25 }}
                exit={{ opacity: 0, y: 0 }}
              >
                <Typography
                  color="white"
                  sx={{
                    fontSize: { mini: "0.9rem", xs: "1rem" },
                    lineHeight: 1.25,
                  }}
                >
                  Bayambang, Pangasinan, Philippines, 2423
                </Typography>
                <Typography
                  color="white"
                  sx={{
                    fontSize: { mini: "0.9rem", xs: "1rem" },
                    lineHeight: 1.25,
                  }}
                >
                  0963-859-5384
                </Typography>
                <Typography
                  color="white"
                  sx={{
                    fontSize: { mini: "0.9rem", xs: "1rem" },
                    lineHeight: 1.25,
                  }}
                >
                  jaredbalajadia96@gmail.com
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Box>

      <AnimatePresence>
        {!desktopView && (
          <motion.div
            key="small-info"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75, delay: 0.25 }}
            exit={{ opacity: 0, y: 0 }}
            style={{ textAlign: "center" }}
          >
            <Typography
              color="white"
              sx={{
                fontSize: { mini: "0.9rem", xxs: "1rem" },
                lineHeight: 1.25,
              }}
            >
              Bayambang, Pangasinan, Philippines, 2423
            </Typography>
            <Typography
              color="white"
              sx={{
                fontSize: { mini: "0.9rem", xxs: "1rem" },
                lineHeight: 1.25,
              }}
            >
              0963-859-5384
            </Typography>
            <Typography
              color="white"
              sx={{
                fontSize: { mini: "0.9rem", xxs: "1rem" },
                lineHeight: 1.25,
              }}
            >
              jaredbalajadia96@gmail.com
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default PersonalInfo;
