import { Box } from "@mui/material";
import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <>
      <Box
        component={motion.div}
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "3rem",
          color: "rgba(255,255,255,0.04)",
          fontFamily: "'Fira Code', monospace",
          zIndex: 0,
          mt: 6,
        }}
      >
        &lt;/SQL&gt;
      </Box>

      <Box
        component={motion.div}
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          fontSize: "2.5rem",
          color: "rgba(255,255,255,0.03)",
          fontFamily: "'Fira Code', monospace",
          zIndex: 0,
        }}
      >
        &lt;/SpringBoot&gt;
      </Box>

      <Box
        component={motion.div}
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "28%",
          left: "10%",
          fontSize: "3rem",
          color: "rgba(255,255,255,0.04)",
          fontFamily: "'Fira Code', monospace",
          zIndex: 0,
          mt: 18,
        }}
      >
        &lt;/Java&gt;
      </Box>

      <Box
        component={motion.div}
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "2%",
          fontSize: "3rem",
          color: "rgba(255,255,255,0.04)",
          fontFamily: "'Fira Code', monospace",
          zIndex: 0,
          mt: 18,
        }}
      >
        &lt;/Typescript&gt;
      </Box>

      <Box
        component={motion.div}
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "65%",
          left: "5%",
          fontSize: "3rem",
          color: "rgba(255,255,255,0.04)",
          fontFamily: "'Fira Code', monospace",
          zIndex: 0,
          mt: 18,
        }}
      >
        &lt;/CSS&gt;
      </Box>

      <Box
        component={motion.div}
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "40%",
          right: "15%",
          fontSize: "3rem",
          color: "rgba(255,255,255,0.04)",
          fontFamily: "'Fira Code', monospace",
          zIndex: 0,
          mt: 18,
        }}
      >
        &lt;/React&gt;
      </Box>
    </>
  );
};

export default BackgroundEffects;
