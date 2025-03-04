import React, { createContext, useState, useContext, useEffect } from "react";

// Criação do contexto
const ThemeContext = createContext();

// Provider que vai envolver a aplicação
export const ThemeProvider = ({ children }) => {
  // Estado para armazenar o tema atual
  const [theme, setTheme] = useState("light");

  // Ao carregar, verificar se há preferência salva
  useEffect(() => {
    // Verificar se existe tema salvo no localStorage
    const savedTheme = localStorage.getItem("odontobot-theme");

    // Se existir, usar o tema salvo
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
    // Se não existir, verificar preferência do sistema
    else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  // Função para alternar entre os temas
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("odontobot-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para facilitar o uso do contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};

export default ThemeContext;
