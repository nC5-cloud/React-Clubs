import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Clubs from "./Clubs";
import Events from "./Events";
import Recommend from "./Recommend";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>

      <header>React Clubs App</header>

      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/clubs">Clubs</Link>
        <Link to="/events">Events & Announcements</Link>
        <Link to="/recommend">Recommendations</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
