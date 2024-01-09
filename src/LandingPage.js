import "./LandingPage.css";
import Nav from "./Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div>
        <div className="banner-image"></div>
        <div className="banner">
          <div className="banner-child">
            <div className="banner-title">Welcome to Ribuix</div>
            <div className="banner-body">
              DATA TECHNOLOGY | DATA INNOVATION | DATA AUTOMATION | DATA
              MANAGEMENT
            </div>
            <div className="banner-btn-wrapper">
              <div className="banner-btn">
                <a href="#contact">
                  <div
                    className="banner-btn-text"
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    Contact Us
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
