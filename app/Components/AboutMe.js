import { Avatar, Box, Chip, Grid, Typography } from "@mui/material";
import { Divider } from "./Divider";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import InterestsIcon from "@mui/icons-material/Interests";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import StarIcon from "@mui/icons-material/Star";
import { useResponsive } from "../Constants/constant";

export const AboutMe = () => {
  const { isSmallScreen } = useResponsive();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 10, delay: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      style={{
        marginTop: "20vh",
        marginBottom: isSmallScreen ? "1vh" : "40vh",
      }}
    >
      <Divider text="About me" />
      <div style={{ height: "5vh" }} />
      {isSmallScreen ? (
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,

                transition: { duration: 0.3 },
              }}
            >
              <Avatar
                src={"/selfpotrait.jpeg"}
                alt={"My avatar"}
                sx={{
                  width: "20vw", // Diameter of the avatar
                  height: "20vw", // Same as width for a perfect circle
                  border: "2px solid black", // Optional subtle border
                  boxShadow: ` 
            0 0 20px 15px rgba(255, 255, 255, 0.2)
          `, // Glowing multi-layered shadow
                  backgroundColor: "#fff", // Ensure contrast for the image
                  marginLeft: "25%",
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SchoolIcon fontSize="small" />
              <Typography variant="h5">Education</Typography>
            </Box>
            <Typography
              className="body-text"
              sx={{
                width: "70%",
                marginBottom: "2%",
              }}
            >
              Penultimate Computer Science Student studying at National
              University of Singapore
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StarIcon fontSize="small" style={{ marginBottom: "0.75%" }} />
              <Typography variant="h5" marginBottom={"1%"}>
                Passion
              </Typography>
            </Box>
            <Typography
              className="body-text"
              sx={{
                width: "70%",
              }}
            >
              Designing and implementing innovative solutions that improves
              performance and solve intricate challenges.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LightbulbIcon fontSize="small" style={{ marginTop: "0.75%" }} />
              <Typography
                variant="h5"
                sx={{ marginTop: "2%", marginBottom: "1%" }}
              >
                Interest
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                gap: 1,
                width: "70%",

                flexWrap: "wrap",
              }}
            >
              <Chip
                sx={{
                  color: "white",
                  backgroundColor: "#262626",
                  userSelect: "none",
                }}
                label="Data Structures and Algorithms"
              />
              <Chip
                sx={{
                  color: "white",
                  backgroundColor: "#262626",
                  userSelect: "none",
                }}
                label="Full-stack Development"
              />
              <Chip
                sx={{
                  color: "white",
                  backgroundColor: "#262626",
                  userSelect: "none",
                }}
                label="Artificial Intelligence"
              />
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,

                transition: { duration: 0.3 },
              }}
            >
              <Avatar
                src={"/selfpotrait.jpeg"}
                alt={"My avatar"}
                sx={{
                  width: "20vw", // Diameter of the avatar
                  height: "20vw", // Same as width for a perfect circle
                  minWidth: "70px",
                  minHeight: "70px",
                  border: "2px solid black", // Optional subtle border
                  boxShadow: ` 
            0 0 20px 15px rgba(255, 255, 255, 0.2)
          `, // Glowing multi-layered shadow
                  backgroundColor: "#fff", // Ensure contrast for the image
                }}
              />
            </motion.div>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <SchoolIcon fontSize="small" />
                <Typography variant="h5" textAlign="center">
                  Education
                </Typography>
              </Box>
              <Typography
                className="body-text"
                sx={{
                  width: "70%",
                  marginBottom: "2%",
                  textAlign: "center",
                }}
              >
                Penultimate Computer Science Student studying at National
                University of Singapore
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <StarIcon fontSize="small" style={{ marginBottom: "0.75%" }} />
                <Typography variant="h5" marginBottom={"1%"} textAlign="center">
                  Passion
                </Typography>
              </Box>
              <Typography
                className="body-text"
                sx={{
                  width: "70%",
                  textAlign: "center",
                }}
              >
                Designing and implementing innovative solutions that improve
                performance and solve intricate challenges.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <LightbulbIcon
                  fontSize="small"
                  style={{ marginTop: "0.75%" }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "2%",
                    marginBottom: "1%",
                    textAlign: "center",
                  }}
                >
                  Interest
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  justifyContent: "center",
                  gap: 1,
                  width: "70%",
                  flexWrap: "wrap",
                }}
              >
                <Chip
                  sx={{
                    color: "white",
                    backgroundColor: "#262626",
                    userSelect: "none",
                  }}
                  label="Data Structures and Algorithms"
                />
                <Chip
                  sx={{
                    color: "white",
                    backgroundColor: "#262626",
                    userSelect: "none",
                  }}
                  label="Full-stack Development"
                />
                <Chip
                  sx={{
                    color: "white",
                    backgroundColor: "#262626",
                    userSelect: "none",
                  }}
                  label="Artificial Intelligence"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </motion.div>
  );
};
