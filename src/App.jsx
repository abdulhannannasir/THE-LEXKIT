import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";

const STATIC_VIEWS = ["home", "terms", "privacy"];

function resolveFromPath(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (STATIC_VIEWS.includes(parts[0])) return parts[0];
  return "home";
}

export default function App() {
  const [view, setView] = useState(() => resolveFromPath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setView(resolveFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (v) => {
    setView(v);
    window.history.pushState(null, "", v === "home" ? "/" : `/${v}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header onNavigate={navigate} />
      <main style={{ flex: 1 }}>
        {view === "home" && <Home />}
        {view === "terms" && <Terms />}
        {view === "privacy" && <Privacy />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
