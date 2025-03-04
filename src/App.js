import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Home from "./components/features/Home/index.js";
import Help from "./components/features/Help";
import { ChatProvider } from "./context/ChatContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./assets/styles/global.css";

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <Router>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ajuda" element={<Help />} />
              {/* Adicionar outras rotas conforme necessário */}
            </Routes>
          </div>
        </Router>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
