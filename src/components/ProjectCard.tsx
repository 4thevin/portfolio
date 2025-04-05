import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ProjectCard = ({ title, description, image, link }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          width: 300,
          height: 400,
          backgroundColor: "#181f1c",
          borderRadius: 3,
          border: "1px solid #857F74",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: "100%", height: "200px", objectFit: "cover" }}
        />

        <CardContent sx={{ fontFamily: "Space Grotesk, sans-serif" }}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            href={link}
            target="_blank"
            sx={{ background: "#56203D" }}
          >
            View Project
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
