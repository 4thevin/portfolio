import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AnimatePresence, motion } from "framer-motion";

const pages = ["Home", "Projects", "Resume"];

const Header = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderDesktopNav = () => (
    <Box>
      {pages.map((page) => {
        const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
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
  );

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
        {isMobile ? (
          <>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <AnimatePresence>
              {open && (
                <>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                    sx={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100vw",
                      height: "100vh",
                      backdropFilter: "blur(8px)",
                      backgroundColor: "rgba(0,0,0,0.4)",
                      zIndex: 1300,
                    }}
                  />

                  <Box
                    component={motion.div}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                    }}
                    sx={{
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 1400,
                      p: 4,
                      borderRadius: 2,
                      background:
                        "linear-gradient(-45deg, #2F2F2F, #320E3B, #0C1B33, #7A306C)",
                      backgroundSize: "400% 400%",
                      animation: "gradientShift 16s ease infinite",
                      color: "#F7FFF7",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    {pages.map((page) => {
                      const path =
                        page === "Home" ? "/" : `/${page.toLowerCase()}`;
                      return (
                        <Button
                          key={page}
                          component={RouterLink}
                          to={path}
                          onClick={handleClose}
                          sx={{
                            color: "#F7FFF7",
                            fontSize: "1.2rem",
                            fontFamily: "Space Grotesk, sans-serif",
                            "&:hover": {
                              color: "#857F74",
                            },
                          }}
                        >
                          {page}
                        </Button>
                      );
                    })}
                  </Box>
                </>
              )}
            </AnimatePresence>
          </>
        ) : (
          renderDesktopNav()
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
