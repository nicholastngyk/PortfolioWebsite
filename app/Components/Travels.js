"use client";

import { Box } from "@mui/material";
import React, { Component } from "react";

const Travels = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 equal-width columns
        gap: "16px", // Space between columns
      }}
    >
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          border: "1px solid #ccc",
        }}
      >
        <Box>
          <video
            src="/bali/mountaingif.mp4"
            controls
            muted
            style={{ height: "auto", width: "100%" }}
          />
        </Box>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default Travels;
