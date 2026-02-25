"use client";
import { Box, Container, Typography, CircularProgress } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { Product } from "@/types/product-type";
import EventCard from "./event-card";

interface EventListProps {
  title: string;
  products: Product[];
  loading?: boolean;
  searchQuery?: string;
  selectedCategory?: string;
  maxItems?: number;
  showMoreHref?: string;
}

export default function EventList({
  title,
  products,
  loading = false,
  searchQuery = "",
  selectedCategory = "All Events",
  maxItems,
  showMoreHref,
}: EventListProps) {
  const hasMore = maxItems !== undefined && products.length > maxItems;
  const visibleProducts =
    maxItems !== undefined ? products.slice(0, maxItems) : products;

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Loading events...
        </Typography>
      </Container>
    );
  }

  if (products.length === 0) {
    const hasFilters = searchQuery || selectedCategory !== "All Events";

    return (
      <Container maxWidth="xl" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" color="text.secondary">
          {hasFilters ? "No events found" : "No events available at the moment"}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          {hasFilters
            ? "Try adjusting your search or filters"
            : "Check back soon for upcoming events!"}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth={"xl"} sx={{ py: 2 }}>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: "auto" }}>
          {hasMore && showMoreHref && (
            <Box
              component={Link}
              href={showMoreHref}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.85rem",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              More events
              <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
            </Box>
          )}
        </Box>
      </Box>
      <Grid container spacing={3}>
        {visibleProducts.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <EventCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
