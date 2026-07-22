import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Box className="page">
      <Box className="page-content">
        <Typography variant="h2" className="page-title">
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