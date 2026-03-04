import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  // Read initial theme preference from local storage or OS settings
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("practiceTyping-theme");
    if (savedTheme) return savedTheme;

    // Fall back to system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark"; // Default to dark instead of forcing light on dark preference
  });

  useEffect(() => {
    // Save to local storage whenever theme changes
    localStorage.setItem("practiceTyping-theme", theme);

    // Toggle the .light class on document body or html
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
