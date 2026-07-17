import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainMenuPage() {
  const navigate = useNavigate();

  const handleSlotMachine = () => {
    // TODO: navigate to the slot machine game once it exists
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "bold", letterSpacing: 1 }}
        >
          Choose a Game
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 260,
          }}
        >
          <Button variant="contained" size="large" onClick={handleSlotMachine}>
            Slot Machine
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/")}
            sx={{ color: "white", borderColor: "white" }}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MainMenuPage;