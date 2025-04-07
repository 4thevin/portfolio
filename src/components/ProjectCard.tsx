import {
  Box,
  Card,
  CardContent,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#D0CDD7",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const ProjectCard = ({ title, description, image, link }: Props) => {
  return (
    <CustomTooltip title={"Click to visit website"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ cursor: "pointer" }}
        onClick={() => window.open(link, "_blank")}
      >
        <Card
          sx={{
            width: 300,
            height: 400,
            backgroundColor: "black",
            borderRadius: 3,
            border: "1px solid #857F74",
            overflow: "hidden",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{ width: "100%", height: "200px", objectFit: "cover" }}
          />

          <CardContent
            sx={{
              fontFamily: "Space Grotesk, sans-serif",
              opacity: 0.7,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </CustomTooltip>
  );
};

export default ProjectCard;
