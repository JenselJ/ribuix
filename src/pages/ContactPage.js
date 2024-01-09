import Nav from "../Nav";
import Footer from "../Footer";
import "./ContactPage.css";
import "./../GlobalStyles.css";
import { useState, useEffect } from "react";
import { send } from "emailjs-com";
import { useNavigate } from "react-router-dom";
import Contact2 from "./../Contact2";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    from_message: "",
  });

  const [fromName, setfromName] = useState("");
  const [fromEmail, setfromEmail] = useState("");
  const [fromMessage, setfromMessage] = useState("");

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let toSend = {
      from_name: fromName,
      from_email: fromEmail,
      from_message: fromMessage,
    };
    send("service_lprpf0g", "template_fgcee0j", toSend, "eXVRrc3lJCn1QQHRI")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "Thank you for your message. Please ensure all details are correct."
        );
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <Nav />
      <div className="contact-landing-wrapper font">
        <div
          className="contact-container mx-auto pt-20 font flex
         justify-center"
        >
          <div className="contact-container-child">
            <div className="text-white tracking-widest font-semibold uppercase">
              Let's Talk
            </div>
            <div className="font-bold text-6xl mt-10 text-white">
              <div>Interested In Working</div>
              <div className="mt-3">Together? Let Us Know!</div>
            </div>
          </div>
        </div>
        <div className="contact-form-package mx-auto flex justify-center pt-20">
          <div className="contact-form-wrapper">
            <div className="h-full">
              <div className="contact-shadow bg-gray-200 auto p-4 rounded-lg">
                <div className="font-bold text-xl">Send us a message!</div>
                <form className="mt-3" onSubmit={onSubmit}>
                  <input
                    className="mb-3 w-full rounded px-3 short-contact"
                    placeholder="Name"
                    onChange={(e) => setfromName(e.target.value)}
                  ></input>
                  <br />
                  <input
                    className="mb-3 w-full rounded px-3 short-contact"
                    placeholder="Email"
                    onChange={(e) => setfromEmail(e.target.value)}
                  ></input>
                  <br />
                  <textarea
                    className="mb-3 w-full rounded px-3 message py-1"
                    placeholder="Message"
                    onChange={(e) => setfromMessage(e.target.value)}
                  ></textarea>
                  <button type="submit" className="contact-page-btn">
                    Submit Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact2 />

      <Footer />
    </>
  );
};

export default ContactPage;
