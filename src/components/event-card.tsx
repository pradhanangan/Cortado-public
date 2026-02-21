"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import { Product } from "@/types/product-type";
import Link from "next/link";

interface EventCardProps {
  product: Product;
}

export default function EventCard({ product }: EventCardProps) {
  const [imageError, setImageError] = useState(false);

  // Calculate lowest price and free ticket status
  // const lowestPrice = product.productItems.reduce((min, item) => {
  //   if (item.isFree) return 0;
  //   return Math.min(min, item.unitPrice);
  // }, Infinity);

  // const hasFreeTickets = product.productItems.some((item) => item.isFree);
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const formatDateToDisplay = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
    };
    const formatted = date.toLocaleDateString("en-GB", options).toUpperCase();
    const parts = formatted.split(" ");
    if (parts.length >= 2) {
      return `${parts[0]}, ${parts.slice(1).join(" ")}`;
    }
    return formatted;
  };
  return (
    <Link
      href={`/orders?productId=${product.id}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer",
          borderRadius: 4,

          boxShadow: 0,
          background: "#fff",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 8,
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          {imageError ? (
            <Box
              sx={{
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "grey.100",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            >
              <BrokenImageIcon sx={{ fontSize: 80, color: "grey.400" }} />
            </Box>
          ) : (
            <CardMedia
              component="img"
              height="200"
              image={product.imageUrl || "https://picsum.photos/400/200"}
              alt={product.name}
              onError={() => setImageError(true)}
              sx={{
                objectFit: "cover",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            />
          )}
          {/* {product.category && (
            <Chip
              label={product.category}
              size="medium"
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                bgcolor: "primary.main",
                color: "white",
                fontWeight: 700,
                fontSize: 14,
                px: 1.5,
                py: 0.5,
                boxShadow: 2,
                letterSpacing: 1,
              }}
            />
          )} */}
        </Box>
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            px: 2,
            pt: 2,
            pb: 1,
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            {product.name}
          </Typography>
          {/* Uncomment to show description */}
          {/* <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.description}
          </Typography> */}
          <Box sx={{ mt: "auto" }}>
            <Stack spacing={1} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* <CalendarTodayIcon
                  sx={{ fontSize: 18, color: "primary.main" }}
                /> */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={500}
                >
                  {formatDateToDisplay(product.startDate)}, {product.startTime}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* <LocationOnIcon
                  sx={{ fontSize: 18, color: "secondary.main" }}
                /> */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontWeight: 500,
                  }}
                >
                  {product.address}
                </Typography>
              </Box>
            </Stack>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                mt: 1,
              }}
            >
              {hasFreeTickets ? (
                <Chip
                  label="FREE"
                  color="success"
                  size="medium"
                  sx={{ fontWeight: 700, fontSize: 15, px: 2 }}
                />
              ) : (
                <Typography
                  variant="body1"
                  fontWeight={700}
                  color="primary.main"
                >
                  From ${lowestPrice.toFixed(2)}
                </Typography>
              )}
            </Box> */}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
