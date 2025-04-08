import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const pages = ["Home", "Projects", "Resume"];

const Header = () => {
  const location = useLocation();

  return (
    <AppBar
      position={"fixed"}
      sx={{
        background: "transparent",
        boxShadow: "none",
        backdropFilter: "blur(4px)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display={"flex"} sx={{ width: "200px" }}>
          {location.pathname !== "/" && (
            <>
              <Avatar
                alt="VF"
                src="/AvatarPic2.png"
                sx={{ width: 32, height: 32, objectFit: "cover" }}
              />
              <Typography
                component={RouterLink}
                to={"/"}
                variant={"h6"}
                sx={{
                  ml: 1,
                  fontFamily: "Space Grotesk, sans-setif",
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "#F7FFF7",
                  "&:hover": { color: "#857F74" },
                }}
              >
                Vin Foregard
              </Typography>
            </>
          )}
        </Box>

        <Box>
          {pages.map((page) => {
            const path = page === "Home" ? "/" : `${page.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Button
                key={page}
                component={RouterLink}
                to={path}
                sx={{
                  color: isActive ? "#F7FFF7" : "#857F74",
                  fontWeight: isActive ? "bold" : "normal",
                  fontFamily: "Space Grotesk, sans-serif",
                  "&:hover": {
                    color: "#F7FFF7",
                  },
                }}
              >
                {page}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
