import React, { createContext, useState, useContext, useEffect } from "react";

// Cria o contexto
const ThemeContext = createContext();

// Hook personalizado para usar o contexto de tema
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Provedor do tema
export const ThemeProvider = ({ children }) => {
  // Verifica a preferência do usuário ao iniciar (localStorage ou preferência do sistema)
  const getInitialDarkMode = () => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    // Verifica a preferência do sistema
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode());

  // Alterna entre os modos claro e escuro
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    // Adiciona ou remove a classe "dark-mode" do body
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  }, [darkMode]);

  // Atualizar quando a preferência do sistema mudar
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (localStorage.getItem("darkMode") === null) {
        setDarkMode(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const value = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
