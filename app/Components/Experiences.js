"use client";

import { Box, Avatar, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Divider } from "./Divider";
import { useResponsive } from "../Constants/constant";
const MotionBox = motion(Box);

const Experiences = () => {
  const { isSmallScreen } = useResponsive();
  const internshipData = [
    {
      companyLogo: "/Logos/Companies/Accenture.png", // Replace with actual logo URL
      title: "Software Engineer Intern",
      company: "Accenture",
      description: [
        "Developed an engaging and user-friendly interface that served tens of thousands of users annually using ReactJS.",
        "Developed robust RESTful API endpoints using Java Spring Boot, enabling seamless and secure handling of user data to enhance application functionality and user experience.",
        "Optimized user data management with MySQL, improving query performance and ensuring efficient storage and retrieval to support seamless application functionality.",
      ],
      techStack: [
        { title: "SpringBoot", url: "/Logos/techstack/springboot.png" },
        { title: "React", url: "/Logos/techstack/react.png" },
        { title: "MySQL", url: "/Logos/techstack/mysql.png" },
        { title: "AWS", url: "/Logos/techstack/aws.png" },
      ],
    },
    {
      companyLogo: "/Logos/Companies/Seagate.png",
      title: "Software Engineer Intern",
      company: "Seagate",
      description: [
        "Developed a Python Django application to automate the creation of graphs for data analysis, reducing the time taken by up to 70%.",
        "Augmented data visualisation capabilities with Matplotlib and Bokeh, enabling the team to analyse data more effectively and make data-driven decisions.",
        "Utilised Redis and Celery for performing of asynchronous requests, improving overall user experience leading to high user onboarding rate in the department",
      ],
      techStack: [
        { title: "Django", url: "/Logos/techstack/django.png" },
        { title: "React", url: "/Logos/techstack/react.png" },
        { title: "Bokeh", url: "/Logos/techstack/bokeh.png" },
        { title: "Redis", url: "/Logos/techstack/redis.png" },
      ],
    },
    {
      companyLogo: "/Logos/Companies/nussoc.png",
      title: "Data Structures and Algorithms Teaching assistant",
      company: "NUS",
      description: [
        "Partnered with professors to teach the concept and use cases of Data Structures such as HashMaps and Linked-Lists, and various algorithms such as sorting and graphing algorithms.",
        "Devised over 20 sets of lesson plans and course materials for approximately 100 students.",
        "Obtained a feedback score of 4.6/5, above the average teaching assistant score of 4.0",
      ],
      techStack: [],
    },
  ];
  return (
    <>
      <Divider text="Experiences" animation={true} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        {internshipData.map((experience, index) =>
          isSmallScreen ? (
            <MotionBox
              key={index}
              initial={{
                x: index % 2 === 0 ? "-40vw" : "40vw",
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                delay: 0.5 * index,
              }}
              viewport={{ once: true, amount: 0.5 }}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 4,
                width: "70%",
                p: 2,
                minHeight: "40vh",
                marginBottom: "10vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={experience.companyLogo}
                  alt="Company Logo"
                  sx={{
                    width: 200,
                    height: 200,
                    marginRight: 2,
                    border: "1px solid grey",
                    boxShadow: `0 0 15px 10px rgba(255, 255, 255, 0.1)`,
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {experience.company}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  {experience.title}
                </Typography>
                <ul
                  style={{
                    color: "white",
                    listStyleType: "disc",
                    paddingLeft: 20,
                  }}
                >
                  {experience.description.map((desc, idx) => (
                    <li
                      key={idx}
                      style={{
                        paddingBottom: "10px",
                        fontSize: "15px",
                      }}
                      className="body-text"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                <Box
                  sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {experience.techStack.map((tech, idx) => (
                    <FlippingChip tech={tech} key={idx} />
                  ))}
                </Box>
              </Box>
            </MotionBox>
          ) : (
            <MotionBox
              key={index}
              initial={{
                x: index % 2 === 0 ? "-40vw" : "40vw",
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                delay: 0.5 * index,
              }}
              viewport={{ once: true, amount: 0.5 }}
              sx={{
                width: "70%",
                p: 2,
                minHeight: "40vh",
                marginBottom: "10vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "5%",
                }}
              >
                <Avatar
                  src={experience.companyLogo}
                  alt="Company Logo"
                  sx={{
                    width: 200,
                    height: 200,
                    marginRight: 2,

                    border: "1px solid grey",
                    boxShadow: `0 0 15px 10px rgba(255, 255, 255, 0.1)`,
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {experience.company}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  {experience.title}
                </Typography>
                <ul
                  style={{
                    color: "white",
                    listStyleType: "disc",
                    paddingLeft: 20,
                  }}
                >
                  {experience.description.map((desc, idx) => (
                    <li
                      key={idx}
                      style={{
                        paddingBottom: "10px",
                        fontSize: "15px",
                      }}
                      className="body-text"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                <Box
                  sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {experience.techStack.map((tech, idx) => (
                    <FlippingChip tech={tech} key={idx} />
                  ))}
                </Box>
              </Box>
            </MotionBox>
          )
        )}
      </div>
    </>
  );
};

export default Experiences;

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
          width: 80,
          height: 80,
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
            background: "none",
          }}
        >
          <Avatar
            src={tech.url}
            alt={tech.title}
            sx={{
              width: "100%",
              height: "100%",
            }}
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
            borderRadius: "50%",
            transform: "rotateY(180deg)",
            backgroundColor: "#4f4f4f",
          }}
        >
          <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
            {tech.title}
          </Typography>
        </Box>
      </MotionBox>
    </MotionBox>
  );
};
