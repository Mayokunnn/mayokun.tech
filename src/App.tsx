import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { Helmet } from "react-helmet";
import { darkTheme, lightTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import useDarkMode from "./hooks/useDarkMode";
import Main from "./componenents/Main";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Mobile from "./componenents/Mobile";
import { firebaseConfig } from "./utils/helpers";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  logEvent(analytics, "notification_received");

  return (
    <ThemeProvider theme={themeMode}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
      <GlobalStyles />
      <BrowserRouter>
        <Mobile />
        <Main theme={theme} toggleTheme={themeToggler}>
          <Helmet>
            <title> Mayokun Areola </title>
          </Helmet>
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
