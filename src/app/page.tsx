"use client";
import { useState, useMemo } from "react";
import { Box } from "@mui/material";
import HeroSection from "@/components/hero-section";
import EventList from "@/components/event-list";
import EventFilterBar from "@/components/event-filter-bar";
import { DUMMY_EVENTS } from "@/constants/event-constant";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");
  const products = DUMMY_EVENTS;

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

  const handleClearFilters = () => {
    setSelectedCategory("All Events");
    setSearchQuery("");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        // minHeight: "100vh",
        // width: "100vw",
        // px: { xs: 0, md: 0 },
      }}
    >
      <HeroSection
        title="Discover Amazing Events"
        subtitle="Find and book tickets for concerts, sports, festivals, and more"
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      />

      <EventFilterBar
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchQuery}
        onClearFilters={handleClearFilters}
      />

      <EventList
        products={filteredEvents}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        maxItems={8}
        showMoreHref="/events"
      />
    </Box>
  );
}
