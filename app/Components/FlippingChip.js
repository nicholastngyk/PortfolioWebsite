import { Chip, Avatar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const FlippingChip = ({ tech }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <MotionBox
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      sx={{
        perspective: "1000px", // Ensure the 3D effect
        display: "inline-block",
      }}
    >
      <MotionBox
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          width: 100,
          height: 100,
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            borderRadius: "50%",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Avatar
            src={tech.url}
            alt={tech.title}
            sx={{ width: "60%", height: "60%" }}
          />
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#e0e0e0", // Grey background
            borderRadius: "50%",
            transform: "rotateY(180deg)",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {tech.title}
          </Typography>
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

export default FlippingChip;
