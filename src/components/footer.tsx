import {
  Box,
  Container,
  Divider,
  Typography,
  Link as MuiLink,
  Stack,
  Grid,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import Link from "next/link";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#fff",
        color: "#222",
        pt: 6,
        pb: 2,
        mt: 8,
        // fontFamily:
        //   "Geist, var(--font-geist-sans), Arial, Helvetica, sans-serif",
        fontSize: "0.84rem",
      }}
      border={1}
      borderColor="divider"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="flex-start">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Corporate
            </Typography>
            <Stack spacing={1}>
              <MuiLink
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
              >
                Who We Are
              </MuiLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Legal
            </Typography>
            <Stack spacing={1}>
              <MuiLink
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
              >
                Privacy Policy
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
              >
                Terms of Use
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
              >
                Terms & Conditions
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
              >
                Cookies Statement
              </MuiLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Help
            </Typography>
            <Stack spacing={1}>
              <MuiLink
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
              >
                Cancelled & Postponed Events
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
              >
                FAQs
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
              >
                Contact Us
              </MuiLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Connect with us
            </Typography>
            <Box>
              <IconButton
                href="#"
                sx={{
                  color: "#222",
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: "#222",
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: "#222",
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: "#eee" }} />
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Typography sx={{ fontSize: "0.84rem" }}>
            © {currentYear} Cortado. All rights reserved.
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}
