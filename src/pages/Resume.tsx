import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { motion } from "framer-motion";
import { School, Shield } from "@mui/icons-material";

const experience = [
  {
    company: "Naval Information Warfare Center",
    posAndTimeline: "Senior Software Engineer | Jan 2023 – Present",
    summary: `Spearheaded the development of a TRL 9-certified mission-critical application that improved efficiency by 500% and saved 150+ labor hours weekly. Led CI/CD pipeline implementation using AWS ECS and ECR. Achieved 90%+ test coverage and enforced secure development with OWASP and Fortify.`,
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Typescript",
      "Postgres",
      "JUnit",
      "Jest",
      "Cypress",
      "AWS ECS",
    ],
  },
  {
    company: "Data Intelligence LLC (Kessel Run)",
    posAndTimeline: "Software Engineer | July 2020 – Jan 2023",
    summary: `Delivered full-stack capabilities for the U.S. Air Force’s Kessel Run program, enhancing their Targeting and Geo-Intelligence systems. Used React Context, Hooks, and Redux to manage state. Employed TDD and CI/CD to improve deployment frequency and mission readiness.`,
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Typescript",
      "Postgres",
      "Jasmine",
      "Cypress",
      "GitLab CI",
    ],
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Resume = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        py: 6,
        color: "#F7FFF7",
        background:
          "linear-gradient(-45deg, #2F2F2F, #320E3B, #0C1B33, #7A306C)",
        backgroundSize: "600% 600%",
        animation: "gradientShift 16s ease infinite",
      }}
    >
      <Box
        component={motion.div}
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#F7FFF7", fontSize: "18px", mt: 4, mb: 4 }}
        >
          A snapshot of my experience, education, and credentials. I’m driven by
          a mission to deliver impactful, secure, and scalable solutions in
          service of the warfighter.
        </Typography>
      </Box>

      {/* Experience */}
      <Box
        component={motion.div}
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h5" gutterBottom>
          Experience
        </Typography>
        <Timeline position="alternate">
          {experience.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{
                  mb: 8,
                  fontFamily: "'Orbitron', sans-serif",
                  pr: 2,
                }}
                align="right"
                variant="body2"
              >
                <Typography variant="h6" sx={{ color: "#F7FFF7" }}>
                  {exp.company}
                </Typography>
                <Typography variant="subtitle2">
                  {exp.posAndTimeline}
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <Box
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <Typography variant="body2">{exp.summary}</Typography>
                  <Box
                    sx={{
                      mt: 0.5,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5,
                    }}
                  >
                    {exp.tech.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: "#857F74",
                          color: "#181f1c",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>

      {/* Education */}
      <Divider sx={{ my: 6, backgroundColor: "#857F74" }} />
      <Box
        component={motion.div}
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Timeline position="alternate-reverse">
          <TimelineItem>
            <TimelineOppositeContent align="right">
              <Typography variant="subtitle1" sx={{ color: "#F7FFF7" }}>
                Brooklyn College
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#ACB0BD" }}>
                B.S. in Computer Science | 2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <School />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body2">
                Emphasis on software engineering, full-stack development, and
                algorithmic thinking. Capstone explored ML-enhanced
                visualizations.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      {/* Certifications */}
      <Divider sx={{ my: 6, backgroundColor: "#857F74" }} />
      <Box
        component={motion.div}
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h5" gutterBottom>
          Certifications
        </Typography>
        <Box sx={{ ml: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Shield fontSize="small" />
            <Typography variant="subtitle1">
              AWS Certified Cloud Practitioner (2023)
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ ml: 4, mb: 2 }}>
            Validated understanding of core AWS services, billing, and cloud
            architecture principles.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Shield fontSize="small" />
            <Typography variant="subtitle1">CompTIA Security+</Typography>
          </Box>
          <Typography variant="body2" sx={{ ml: 4 }}>
            Foundations of secure development, risk mitigation, and network
            security principles.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Resume;
