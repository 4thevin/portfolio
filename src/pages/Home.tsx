import HeroSection from "../components/HeroSection.tsx";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      display={"flex"}
      sx={{
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <HeroSection />
    </Box>
  );
};

export default Home;
