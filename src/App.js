import React from "react";
import "./assets/styles/App.css";
import Home from "./components/features/Home/index.js";
import { ChatProvider } from "./context/ChatContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./assets/styles/global.css";

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <div className="app-container">
          <Home />
        </div>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
