"use client";
import { useState, useMemo, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import EventList from "@/components/event-list";
import EventFilterBar from "@/components/event-filter-bar";
import { DUMMY_EVENTS } from "@/constants/event-constant";

const PAGE_SIZE = 16;

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const products = DUMMY_EVENTS;

  // Reset visible count whenever filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedCategory, searchQuery]);

  const filteredEvents = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== "All Events") {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory,
      );
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.name.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query),
      );
    }
    return filtered;
  }, [products, selectedCategory, searchQuery]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = filteredEvents.length > visibleCount;

  const handleClearFilters = () => {
    setSelectedCategory("All Events");
    setSearchQuery("");
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="xl" sx={{ pt: 5, pb: 2 }}>
        <Typography variant="h3" fontWeight={700}>
          All Events
        </Typography>
      </Container>
      <EventFilterBar
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchQuery}
        onClearFilters={handleClearFilters}
      />
      <EventList
        products={visibleEvents}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
      {hasMore && (
        <Box sx={{ mt: 2, mb: 6, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleLoadMore}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Load More ({filteredEvents.length - visibleCount} remaining)
          </Button>
        </Box>
      )}
    </Box>
  );
}
