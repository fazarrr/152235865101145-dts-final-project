import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#BB6464", color: "grey.700" }}>
      <Container maxWidth="md" sx={{ py: 6, mt: 8 }}>
        <Grid container spacing={4} sx={{ mb: 4, textAlign: "left" }}>
          <Grid item xs={6} md={3}>
            <Stack spacing={"15px"}>
              <Typography variant="caption" component="a" href="#">
                Audio and Subtitles
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={"15px"}>
              <Typography variant="caption" component="a" href="#">
                Audio Description
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={"15px"}>
              <Typography variant="caption" component="a" href="#">
                Help center
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={"15px"}>
              <Typography variant="caption" component="a" href="#">
                Gift Cards
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="caption2" sx={{ float: "left" }}>
          © 2022 Fab - News, All Right Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
