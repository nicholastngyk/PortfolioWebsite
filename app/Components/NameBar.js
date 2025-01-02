"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useResponsive } from "../Constants/constant";

const MotionBox = motion(Box);
const MotionAppBar = motion(AppBar);

const NameBar = () => {
  const [isInView, setIsInView] = useState(false);
  const { isSmallScreen } = useResponsive();
  return (
    <>
      <MotionAppBar
        position="sticky"
        color="transparent"
        initial={{ opacity: 0 }}
        opacity={isInView ? 0 : 1}
        animate={{ opacity: isInView ? 0 : 1 }}
        transition={{ opacity: { duration: 0.5 } }}
        sx={{
          borderBottom: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
            minWidth: "475px",
          }}
        >
          <Typography variant="h4">Nicholas Tng</Typography>
          <div>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "15px",
                mr: isSmallScreen ? "5px" : "0px",
                color: "white",
                border: "1px solid",
              }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nicholas-tng/",
                  "_blank"
                )
              }
            >
              Linkedin
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "15px",
                ml: "5px",
                color: "white",
                border: "1px solid",
              }}
              onClick={() => (window.location.href = "/NicholasTngResume.pdf")}
            >
              Resume
            </Button>
          </div>
        </Toolbar>
      </MotionAppBar>
      <div style={{ overflow: "hidden" }}>
        <MotionBox
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            textAlign: "center",
            marginBottom: "10vh",
            gap: 1,
            backgroundImage: "url('/kinabalu/cover.jpeg')",
            backgroundSize: isSmallScreen ? "70%" : "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(100%)",
            color: "black",
            border: "1px solid",
            overflow: "hidden",
            "&:hover": {
              transform: "scale(1.05)",
              filter: "brightness(0.8)",
              transition: "transform 0.5s, filter 0.3s",
              transformOrigin: "center",
            },
            transition: "transform 0.5s, filter 0.3s",
          }}
          onViewportEnter={() => {
            setIsInView(true);
          }}
          onViewportLeave={() => {
            setIsInView(false);
          }}
          viewport={{ amount: 0.4 }}
        >
          <div>
            <Typography
              variant="h2"
              sx={{
                userSelect: "none",
                position: "relative",
                fontWeight: "bold",
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Text shadow for better visibility
              }}
            >
              Nicholas Tng
            </Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "15px",
                  mr: "5px",
                  color: "black",
                  border: "1px solid",
                }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/nicholas-tng/",
                    "_blank"
                  )
                }
              >
                Linkedin
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "15px",
                  ml: "5px",
                  color: "black",
                  border: "1px solid",
                }}
                onClick={() =>
                  (window.location.href = "/NicholasTngResume.pdf")
                }
              >
                Resume
              </Button>
            </div>
          </div>
        </MotionBox>
      </div>
    </>
  );
};

export default NameBar;

// <motion.div
//   initial={{ width: 0 }}
//   animate={{ width: "100%" }}
//   transition={{ duration: 3, ease: "easeInOut" }}
//   style={{
//     overflow: "hidden",
//     whiteSpace: "nowrap",
//     display: "inline-block",
//   }}
// >
//   <Typography variant="h5">
//     I innovate solutions with technology.
//   </Typography>
// </motion.div>;
