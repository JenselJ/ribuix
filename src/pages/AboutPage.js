import Nav from "../Nav";
import Footer from "../Footer";
import "./AboutPage.css";
import "./../GlobalStyles.css";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className="landing-wrapper">
        <div
          className="about-container mx-auto pt-20 font flex
         justify-center"
        >
          <div className="about-container-child">
            <div className="text tracking-widest font-semibold uppercase">
              About Us
            </div>
            <div className="font-bold text-6xl mt-10">
              <div>
                We Believe In <span className="text">Data,</span>
              </div>
              <div className="mt-3">
                So You Can Believe In <span className="text">Us</span>
              </div>
            </div>
            <div className="about-image"></div>
          </div>
        </div>
      </div>
      <div className="section-two pb-20">
        <div className="about-container mx-auto lg:pt-20 font flex">
          <div className="about-wrapper-child pt-10 mr-5">
            <div className="tracking-widest font-semibold uppercase text3">
              Our Mission
            </div>
            <div className="mt-10 text-white">
              <div className="font-bold text-4xl">We Want To Contribute</div>
              <div className="mt-3 font-bold text-4xl">
                Beyond Providing Solutions
              </div>
              <div className="text-lg mt-8 text-wrapper pr-10">
                <p className="">
                  Ribuix stands at the forefront of the digital revolution,
                  championing bespoke data solutions. We aren't just
                  technologists; we are visionaries committed to reshaping
                  enterprises for the digital future.
                </p>
                <p className="mt-5">
                  We provide Tailored Solutions to drive digital excellence.
                  Ribuix combines innovation with best-in-class services to
                  deliver transformative results, ensuring your business remains
                  agile and ahead of the curve.
                </p>
                <p className="mt-5">
                  While our roots are in Sydney, Australia, our reach is global.
                  With over 50 dedicated consultants, our presence is fortified
                  by a strategic delivery hub in Kolkata, India, ensuring that
                  we deliver a blend of local insight and global expertise to
                  every project.
                </p>
              </div>
            </div>
          </div>
          <div className="rocket"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
