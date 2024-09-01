import { Route, Routes } from "react-router-dom";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Resume from "../pages/Resume";
import { MobileView, MobileViewWrapper } from "../styles/Mobile.style";
import Home from "./Home";
import Menu from "./Menu";

export default function Mobile() {
  return (
    <MobileView>
      <MobileViewWrapper>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MobileViewWrapper>
    </MobileView>
  );
}
