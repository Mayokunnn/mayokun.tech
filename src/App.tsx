import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import useDarkMode from "./hooks/useDarkMode";
import Main from "./componenents/Main";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <BrowserRouter>
        <Main theme={theme} toggleTheme={themeToggler}>
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Navigate replace to="/" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
