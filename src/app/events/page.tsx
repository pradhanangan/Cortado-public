"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Box, Button, Container, Typography } from "@mui/material";
import EventList from "@/components/event-list";
import EventFilterBar from "@/components/event-filter-bar";
import { DUMMY_EVENTS } from "@/constants/event-constant";

const PAGE_SIZE = 16;

function EventsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(
    () => searchParams.get("category") || "All Events",
  );
  const [searchQuery, setSearchQuery] = useState(
    () => searchParams.get("q") || "",
  );
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const products = DUMMY_EVENTS;

  // Reset visible count whenever filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedCategory, searchQuery]);

  // Sync URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    if (selectedCategory !== "All Events")
      params.set("category", selectedCategory);
    const qs = params.toString();
    router.replace(qs ? `/events?${qs}` : "/events", { scroll: false });
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
        showSearch
      />
      <EventList
        title=""
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

export default function EventsPage() {
  return (
    <Suspense>
      <EventsPageContent />
    </Suspense>
  );
}
