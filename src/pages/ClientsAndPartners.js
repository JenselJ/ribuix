import Nav from "../Nav";
import { useEffect } from "react";
import "./ClientsAndPartners.css";
import talent from "../assets/Group38.png";
import dtdc from "../assets/Group39.png";
import medline from "../assets/medline.jpeg";
import zeny from "../assets/zeny.png";
import Footer from "../Footer";

const ClientsAndPartners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div
        className="about-container mx-auto pt-20 pb-16 font flex
         justify-center"
      >
        <div className="about-container-child">
          <div className="text tracking-widest font-semibold uppercase">
            Clients & Partners
          </div>
          <div className="font-bold text-6xl mt-10">
            <div>
              We Help Our <span className="text">Clients,</span>
            </div>
            <div className="mt-3">
              With Any Data <span className="text">Needs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="font text-5xl font-bold text-center mt-20 mb-10">
        Clientele
      </div>
      <div className="w-100 flex justify-center">
        <div className="clientele-container grid grid-cols-1 md:grid-cols-3 text-center text-xl font-bold">
          <div className="flex justify-center">
            <div className="mb-16 md:mb-0">
              <div className="logo-wrapper justify-center flex items-center">
                <img className="talent-img" src={talent}></img>
              </div>
              <div className="mt-3">TALENT INTERNATIONAL</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mb-16 md:mb-0">
              <div className="logo-wrapper justify-center flex items-center">
                <img className="talent-img" src={dtdc}></img>
              </div>{" "}
              <div className="mt-3">DTDC</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mb-16 md:mb-0">
              <div className="logo-wrapper justify-center flex items-center">
                <img className="talent-img" src={medline}></img>
              </div>{" "}
              <div className="mt-3">MEDLINE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="font text-5xl font-bold text-center mt-28 mb-10">
        Offshore Alliance
      </div>
      <div className="w-100 flex justify-center">
        <div className="clientele-container grid grid-cols-1 text-center text-xl font-bold">
          <div className="flex justify-center">
            <div>
              <div className="logo-wrapper justify-center flex items-center">
                <img className="talent-img" src={zeny}></img>
              </div>
              <div>Zen Y Data</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClientsAndPartners;
