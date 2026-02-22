"use client";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import HeroSection from "@/components/hero-section";
import EventList from "@/components/event-list";
import EventFilterBar from "@/components/event-filter-bar";
import { DUMMY_EVENTS } from "@/constants/event-constant";

export default function Home() {
  const router = useRouter();

  const handleSearchChange = (query: string) => {
    if (query.trim()) {
      router.push(`/events?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleCategoryChange = (category: string) => {
    if (category !== "All Events") {
      router.push(`/events?category=${encodeURIComponent(category)}`);
    }
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
        onSearchChange={handleSearchChange}
        searchQuery=""
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      />

      <EventFilterBar
        selectedCategory="All Events"
        searchQuery=""
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        onClearFilters={() => {}}
      />

      <EventList
        products={DUMMY_EVENTS}
        maxItems={8}
        showMoreHref="/events"
      />
    </Box>
  );
}
