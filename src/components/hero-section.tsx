"use client";

import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onSearchChange?: (query: string) => void;
  searchQuery?: string;
}

export default function HeroSection({
  title = "Discover Amazing Events",
  subtitle = "Find and book tickets for the best events happening near you",
  imageUrl = "https://picsum.photos/1200/400",
  onSearchChange,
  searchQuery = "",
}: HeroSectionProps) {
  return (
    <Container maxWidth={"xl"} sx={{ py: 2 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 520, sm: 600, md: 700 },
          overflow: "hidden",
          display: "flex",
          alignItems: "stretch",
          mt: 0,
          // borderRadius: 4,
        }}
      >
        <Image
          src={imageUrl}
          alt="Hero image"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // background:
            //   "linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(230,240,255,0.6) 100%)",
            // backdropFilter: "blur(2px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={{ xs: 4, sm: 6, md: 8 }}
            alignItems="center"
            textAlign="center"
            sx={{ py: { xs: 2, sm: 4, md: 6 } }}
          >
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: "#2d3a4a",
                  mb: { xs: 2, sm: 3, md: 4 },
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  maxWidth: "700px",
                  mb: { xs: 3, sm: 4, md: 5 },
                }}
              >
                {subtitle}
              </Typography>

              {onSearchChange && (
                <Box sx={{ width: "100%", maxWidth: "600px" }}>
                  <TextField
                    fullWidth
                    placeholder="Search for events..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      bgcolor: "white",
                      borderRadius: 2,
                      "& .MuiOutlinedInput-root": {
                        fontSize: { xs: "0.95rem", sm: "1.1rem" },
                        "& fieldset": {
                          borderColor: "transparent",
                        },
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                </Box>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
