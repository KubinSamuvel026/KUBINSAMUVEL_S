import { useMemo, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { useTheme } from "./hooks";
import { attachRippleVars } from "./lib/dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Academics from "./pages/Academics";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppShell() {
  const [theme, setTheme] = useTheme();
  const onGlobalMove = useMemo(() => (e) => attachRippleVars(e), []);

  useEffect(() => {
    const sel = 'a,button,[role="button"],input,textarea,select,label';
    const onOver = (e) => {
      const t = e.target?.closest?.(sel);
      document.body.style.cursor = t ? "none" : "";
    };
    window.addEventListener("mousemove", onOver, { passive: true });
    return () => window.removeEventListener("mousemove", onOver);
  }, []);

  return (
    <div className="min-h-screen" onMouseMove={onGlobalMove}>
      <ScrollProgress />
      <CustomCursor />
      <ScrollToTop />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/academics" element={<Academics />} />
          {/* <Route path="/certificates" element={<Certificates />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
