import "./App.css";
import LandingPage from "./LandingPage";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ClientsAndPartners from "./pages/ClientsAndPartners";
import Footer from "./Footer";
import Contact2 from "./Contact2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <LandingPage />
                <About />
                <Services />
                <Products />
                <div id="contact">
                  <Contact2 />
                </div>
                <Footer />
              </>
            }
          />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route
            exact
            path="/clients-and-partners"
            element={<ClientsAndPartners />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
