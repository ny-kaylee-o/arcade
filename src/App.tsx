import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage";
import MainMenuPage from "./pages/MainMenuPage";
import SlotMachinePage from "./pages/SlotMachinePage";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MainMenuPage />} />
        <Route path="/slot-machine" element={<SlotMachinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;