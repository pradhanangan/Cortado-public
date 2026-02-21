"use client";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { use, useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          // height: 64,
          // minHeight: 64,
          justifyContent: "center",
          top: 0,
          zIndex: 1100,
          backgroundColor: scrolled ? "#fff" : "transparent",
          // transition: "background-color 0.3s, box-shadow 0.3s",
          // boxShadow: scrolled ? undefined : "none",
        }}
      >
        <Container
          maxWidth={"xl"}
          // sx={{ height: 1, display: "flex", alignItems: "center" }}
        >
          <Toolbar
            sx={{
              minHeight: 80,
              height: 80,
              alignItems: "center",
              display: "flex",
              width: 1,
            }}
            disableGutters
          >
            <Box
              component="img"
              sx={{
                height: 40, // Adjust as needed
              }}
              alt="My Logo"
              src={"/cortado-logo.png"}
            />
            {/* <LocalCafeIcon
              // color="common.black"
              sx={{ color: "black" }}
            /> */}
            {/* <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                marginLeft: 1,
                // color: scrolled ? "primary.main" : "common.black",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Cortado
            </Typography> */}
          </Toolbar>
        </Container>
      </AppBar>
      {/* Spacer to offset fixed AppBar */}
      <Box sx={{ height: 80, minHeight: 80 }} />
    </>
  );
}
