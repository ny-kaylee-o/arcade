import { useState } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type SymbolInfo = {
  emoji: string;
  name: string;
};

const SYMBOLS: SymbolInfo[] = [
  { emoji: "🍒", name: "Cherry" },
  { emoji: "🔔", name: "Bell" },
  { emoji: "💎", name: "Diamond" },
  { emoji: "⭐", name: "Star" },
  { emoji: "7️⃣", name: "Seven" },
  { emoji: "🍀", name: "Clover" },
];

const STARTING_BALANCE = 100;
const MIN_BET = 5;
const QUICK_BET_AMOUNTS = [5, 10, 15, 20, 25];

function getRandomSymbol(): SymbolInfo {
  const randomIndex = Math.floor(Math.random() * SYMBOLS.length);
  return SYMBOLS[randomIndex];
}

function checkWin(reels: SymbolInfo[], bet: number) {
  const [first, second, third] = reels;

  const allThreeMatch = first.emoji === second.emoji && second.emoji === third.emoji;
  if (allThreeMatch) {
    return { message: `Jackpot! Three ${first.name}s matched.`, winAmount: bet * 8 };
  }

  const anyTwoMatch = first.emoji === second.emoji || first.emoji === third.emoji || second.emoji === third.emoji;
  if (anyTwoMatch) {
    return { message: "Two matched. Nice spin.", winAmount: bet * 3 };
  }

  return { message: "No match this time. Spin again.", winAmount: 0 };
}

function SlotMachinePage() {
  const navigate = useNavigate();

  const [balance, setBalance] = useState(STARTING_BALANCE);
  const [bet, setBet] = useState(MIN_BET);
  const [reels, setReels] = useState([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("Place a bet and hit Spin.");
  const [lastWin, setLastWin] = useState(0);

  function handleSpin() {
    if (spinning || bet > balance) {
      return;
    }

    setSpinning(true);
    setBalance((current) => current - bet);
    setLastWin(0);
    setMessage("Spinning...");

    setTimeout(() => {
      const finalReels = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
      const result = checkWin(finalReels, bet);

      setReels(finalReels);
      setBalance((current) => current + result.winAmount);
      setLastWin(result.winAmount);
      setMessage(result.message);
      setSpinning(false);
    }, 800);
  }

  function handleReset() {
    if (spinning) {
      return;
    }

    setBalance(STARTING_BALANCE);
    setBet(MIN_BET);
    setReels([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
    setLastWin(0);
    setMessage("Ready for another run.");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0d0d1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Paper sx={{ width: "100%", maxWidth: 700, p: 4, bgcolor: "#151525" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              Slot Machine
            </Typography>
            <Typography sx={{ color: "#9dfc7a" }}>
              Balance: {balance} &nbsp;|&nbsp; Last Win: {lastWin}
            </Typography>
          </Box>

          {/* The three reels */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            {reels.map((symbol, index) => (
              <Box
                key={index}
                sx={{
                  width: 120,
                  height: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3.5rem",
                  bgcolor: "#222",
                  borderRadius: 2,
                }}
              >
                {symbol.emoji}
              </Box>
            ))}
          </Box>

          <Typography sx={{ color: "white", textAlign: "center" }}>{message}</Typography>

          {/* Spin / Back buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleSpin}
              disabled={spinning || bet > balance}
            >
              {spinning ? "Spinning..." : "Spin"}
            </Button>

            <Button variant="outlined" fullWidth size="large" onClick={() => navigate("/menu")}>
              Back to Menu
            </Button>
          </Box>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

          {/* Bet controls */}
          <Box>
            <Typography sx={{ color: "white", mb: 1 }}>Bet amount: {bet}</Typography>

            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {QUICK_BET_AMOUNTS.map((amount) => (
                <Button
                  key={amount}
                  variant={bet === amount ? "contained" : "outlined"}
                  size="small"
                  disabled={amount > balance}
                  onClick={() => setBet(Math.min(amount, balance))}
                >
                  {amount}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Rules */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography sx={{ color: "#a8b3d1" }}>Three of a kind pays 8x your bet.</Typography>
            <Typography sx={{ color: "#a8b3d1" }}>Any pair pays 3x your bet.</Typography>
            <Typography sx={{ color: "#a8b3d1" }}>No match means you lose the wager.</Typography>
          </Box>

          <Button variant="text" onClick={handleReset} disabled={spinning}>
            Reset game
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default SlotMachinePage;