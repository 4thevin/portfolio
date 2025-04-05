import { Avatar, Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
      <Avatar
        alt="VF"
        src="public/AvatarPic2.png"
        sx={{ width: 80, height: 80, objectFit: "cover" }}
      />
      <Typography
        component={motion.h1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        variant="h3"
        fontWeight="medium"
        sx={{ mb: 2 }}
      >
        Vin Foregard
      </Typography>

      <Typography
        component={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        variant="h5"
        sx={{ color: "#857F74", mb: 4 }}
      >
        Full Stack Developer | Design-Centric Thinker
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#56203D",
            color: "#F7FFF7",
            fontWeight: "medium",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#6e2c4f",
            },
          }}
        >
          View Projects
        </Button>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
