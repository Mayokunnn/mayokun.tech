import { useState, useEffect } from "react";

const useDarkMode = function (): [string, () => void] {
  const [theme, setTheme] = useState<string>("dark");

  const setMode = function (mode: string) {
    localStorage.setItem("displayTheme", mode);
    setTheme(mode);
  };

  const themeToggler = function () {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("displayTheme");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggler];
};

export default useDarkMode;