import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        bgcolor: "black",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background layer — drop your own image in public/ and set backgroundImage below.
          Leave it out entirely for a plain black background. */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundImage: "url('/your-background.png')",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "white", fontWeight: "bold", letterSpacing: 2 }}
        >
          MY ARCADE GAME
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/menu")}
          sx={{ px: 6, py: 1.5, fontSize: "1.2rem" }}
        >
          Play
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;