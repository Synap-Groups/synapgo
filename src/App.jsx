import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NavProvider } from "./contexts/NavProvider";
import { ContactProvider } from "./contexts/ContactProvider";

function App() {
  return (
    <Router>
      <NavProvider >
        <ContactProvider>
          <div className="bg-white text-gray-900 min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Future routes for About, Services, etc. */}
              </Routes>
            </main>
            <Footer />
          </div>
        </ContactProvider>
      </NavProvider>
    </Router>
  );
}

export default App;
