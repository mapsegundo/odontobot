import React from "react";
import "./assets/styles/App.css";
import Home from "./components/features/Home/index.js";
import { ChatProvider } from "./context/ChatContext";
import "./assets/styles/global.css";

function App() {
  return (
    <ChatProvider>
      <div className="app-container">
        <Home />
      </div>
    </ChatProvider>
  );
}

export default App;
