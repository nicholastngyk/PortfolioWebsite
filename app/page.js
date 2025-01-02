"use client";
import Image from "next/image";
import NameBar from "./Components/NameBar";
import Experiences from "./Components/Experiences";
import Travels from "./Components/Travels";
import { AboutMe } from "./Components/AboutMe";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div style={{ minWidth: "400px" }}>
      <NameBar />
      {/* <Travels /> */}
      <AboutMe />

      <Experiences />
    </div>
  );
}
