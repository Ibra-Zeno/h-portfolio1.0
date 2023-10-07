import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Get the initial theme preference from local storage (if available)
  let storedTheme: Theme = "light"; // Default theme if localStorage is unavailable

  try {
    const storedThemeRaw = localStorage.getItem("theme");
    if (storedThemeRaw === "light" || storedThemeRaw === "dark") {
      storedTheme = storedThemeRaw as Theme; // Cast to Theme type
    }
  } catch (error) {
    console.error("Error accessing localStorage:", error);
  }

  const [theme, setTheme] = useState<Theme>(storedTheme);

  const toggleTheme = () => {
    // Toggle the theme between "light" and "dark"
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Save the theme preference to local storage
    try {
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
