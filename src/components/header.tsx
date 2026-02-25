"use client";
import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
          justifyContent: "center",
          top: 0,
          zIndex: 1100,
          backgroundColor: scrolled ? "#fff" : "transparent",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth={"xl"}>
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
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/cortado-logo.png"
                height={40}
                width={160}
                alt="Cortado"
                style={{ objectFit: "contain" }}
              />
            </Link>
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
