import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import BackgroundEffects from "../components/BackgroundEffects.tsx";

const projectData = [
  {
    title: "EV Charger Finder",
    description:
      "Find public EV charging stations near any ZIP code in the US, built with React, TypeScript, MUI and Java.",
    image: "/EvChargerHomePageSS.png",
    link: "https://ev-chargers-pi.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, design-focused developer portfolio built with React, TypeScript, MUI, and Framer Motion. You're on it right now! Under active development.",
    image: "/porfolioWebsitePic.png",
    link: "https://www.vforegard.dev",
  },
];

const Projects = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100vw"
      sx={{
        height: "auto",
        py: 6,
        width: "100vw",
        background:
          "linear-gradient(-45deg, #2F2F2F, #320E3B, #0C1B33, #7A306C)",
        backgroundSize: "400% 400%",
        color: "#F7FFF7",
        animation: "gradientShift 16s ease infinite",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <BackgroundEffects />
      <Typography variant="h4" mb={4} mt={4}>
        Featured Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
