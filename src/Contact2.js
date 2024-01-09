import { useNavigate } from "react-router-dom";

const Contact2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center bg-gray-100 font px-3">
        <div className="flex grid grid-cols-1 xl:grid-cols-1 py-8 mb-5 lg:mb-0">
          <div className="flex items-center pt-5 xl:pt-0 justify-center xl:justify-start">
            <div className="xl:pl-10 text-gray-600">
              <div className="font-bold text-4xl text-black mb-7">Ribuix</div>
              <div className="mb-5 flex items-center">
                <svg
                  fill="#0342a6"
                  className="pb-2"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,2a8,8,0,0,0-7.992,8A12.816,12.816,0,0,0,12,22v0H12v0a12.816,12.816,0,0,0,7.988-12A8,8,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z" />
                </svg>
                <div className="mb-3 ml-2">
                  Level 1, 457 Elizabeth Street, Surry Hills, NSW 2010
                </div>
              </div>
              <div className="mb-5 flex items-center">
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 26 26"
                  fill="#0342a6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#0342a6"
                  />
                </svg>
                <div className="mb-3 ml-2">+61 424 568 195</div>
              </div>
              <div className="mb-5 flex items-center">
                <svg
                  height="30px"
                  width="35px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#0342a6"
                >
                  <g>
                    <path
                      class="st0"
                      d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083
		h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92
		c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87
		C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024
		c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674
		l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469
		c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599
		C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92
		c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92
		C462.107,387.195,462.94,397.75,456.948,404.771z"
                    />
                  </g>
                </svg>
                <div className="mb-3 ml-2">admin@ribuix.com</div>
              </div>
              <div className="grid grid-cols-2 text">
                <div
                  className="contact-page-btn text-center py-1 rounded mr-1"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About Us
                </div>
                <div
                  className="contact-page-btn text-center py-1 rounded ml-1"
                  onClick={() => {
                    navigate("/services");
                  }}
                >
                  Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact2;
