import { Box, Button, Typography, CssBaseline } from "@mui/material";

function App() {
  const handlePlay = () => {
    // TODO: hook up game start logic here
  };

  return (
    <>
      <CssBaseline />
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
        {/* Background layer — drop your own image in src/assets and set the
            backgroundImage below. Leave it out entirely for a plain black background. */}
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

        {/* Foreground content */}
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
            :3
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={handlePlay}
            sx={{ px: 6, py: 1.5, fontSize: "1.2rem" }}
          >
            Play
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;