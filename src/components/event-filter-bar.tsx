"use client";

import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Chip,
  InputAdornment,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { EVENT_CATEGORIES } from "@/constants/event-constant";

interface EventFilterBarProps {
  selectedCategory: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

export default function EventFilterBar({
  selectedCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
  onClearFilters,
}: EventFilterBarProps) {
  const hasActiveFilters =
    selectedCategory !== "All Events" || searchQuery !== "";

  return (
    <Box
      sx={{
        bgcolor: "rgba(255,255,255,0.85)",
        // paddingTop: 3,
        py: 5,
        // borderBottom: 1,
        // borderColor: "divider",
        width: "100vw",
      }}
    >
      <Container maxWidth={"xl"}>
        <Box>
          <Stack spacing={3}>
            {/* Search Bar */}
            {/* <TextField
            fullWidth
            placeholder="Search events by name or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <ClearIcon
                    sx={{ cursor: "pointer", color: "text.secondary" }}
                    onClick={() => onSearchChange("")}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "background.default",
              },
            }}
          /> */}

            {/* Category Filters */}
            <Box>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {EVENT_CATEGORIES.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    onClick={() => onCategoryChange(category)}
                    color={
                      selectedCategory === category ? "primary" : "default"
                    }
                    variant={
                      selectedCategory === category ? "filled" : "outlined"
                    }
                    sx={{
                      fontWeight: selectedCategory === category ? 600 : 400,
                      cursor: "pointer",
                    }}
                  />
                ))}
                {hasActiveFilters && (
                  <Chip
                    label="Clear Filters"
                    onClick={onClearFilters}
                    deleteIcon={<ClearIcon />}
                    onDelete={onClearFilters}
                    color="error"
                    variant="outlined"
                    sx={{ cursor: "pointer" }}
                  />
                )}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
