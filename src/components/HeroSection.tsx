import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

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
        src="/AvatarPic2.png"
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
        sx={{ color: "#857F74", mb: 1.5 }}
      >
        Full Stack Developer | Design-Centric Thinker
      </Typography>
      <Stack direction="row" spacing={1.5}>
        <Tooltip title="LinkedIn">
          <IconButton
            aria-label="LinkedIn"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vineeth-foregard-a3844999",
                "_blank",
              )
            }
            sx={{
              color: "#F7FFF7",
              transition: "0.3s",
              "&:hover": { color: "#857F74" },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub">
          <IconButton
            aria-label="GitHub"
            onClick={() => window.open("https://github.com/4thevin", "_blank")}
            sx={{
              color: "#F7FFF7",
              transition: "0.3s",
              "&:hover": { color: "#857F74" },
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Send Email">
          <IconButton
            aria-label="Email"
            onClick={() => window.open("mailto:dannyomicron900@gmail.com")}
            sx={{
              color: "#F7FFF7",
              transition: "0.3s",
              "&:hover": { color: "#857F74" },
            }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Stack>

      <Box
        sx={{
          maxWidth: 500,
          p: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ ml: 4, fontSize: "20px", color: "#F7FFF7" }}
        >
          Hello there! I'm Vin, based in the Princeton area of New Jersey.
          Currently supporting mission-critical efforts with the U.S. Navy, I
          focus on building scalable solutions that directly empower the
          warfighter.
          <br />
          <br />
          Outside of work, I enjoy CrossFit, working on cars, and turning ideas
          into polished digital products. I'm passionate about creating
          intuitive experiences and making a lasting impact through technology.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
