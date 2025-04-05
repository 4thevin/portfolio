import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100vw"
      sx={{
        height: "100vh",
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
      <Typography variant="h4" mb={4}>
        Featured Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid>
          <ProjectCard
            title="EV Charger Finder"
            description="Find public EV charging stations near any ZIP code in the US."
            image="public/EvChargerHomePageSS.png"
            link="https://ev-chargers-pi.vercel.app"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
