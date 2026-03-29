import { useEffect, useMemo, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { ScrollProgress } from "./components/ScrollProgress";
import { Skills } from "./components/Skills";
import { Strengths } from "./components/Strengths";
import { attachRippleVars } from "./lib/dom";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default function App() {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const sel = 'a,button,[role="button"],input,textarea,select,label';
    const onOver = (e) => {
      const t = e.target?.closest?.(sel);
      document.body.style.cursor = t ? "none" : "";
    };
    window.addEventListener("mousemove", onOver, { passive: true });
    return () => window.removeEventListener("mousemove", onOver);
  }, []);

  const onGlobalMove = useMemo(() => (e) => attachRippleVars(e), []);

  return (
    <div className="app-shell" onMouseMove={onGlobalMove}>
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Strengths />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}