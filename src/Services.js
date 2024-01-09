import "./Services.css";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <div className="backdrop w-100 text-center text-white font font-bold text-4xl pt-12 pb-8 uppercase">
        Services
      </div>
      <div className="backdrop flex justify-center text-white font pb-12">
        <div className="service-container grid grid-cols-1 lg:grid-cols-3">
          <div className="flex items-center justify-center px-3 mb-5 lg:mb-0">
            <div className="mr-5">
              <div className="service-img flex items-center justify-center">
                <svg
                  fill="#000000"
                  height="50px"
                  width="50px"
                  version="1.1"
                  id="Icons"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M29.9,17.5C29.7,17.2,29.4,17,29,17c-2.2,0-4.3,1-5.6,2.8L22.5,21c-1.1,1.3-2.8,2-4.5,2h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.9
	c1.6,0,3.1-1.3,3.1-2.9c0,0,0-0.1,0-0.1c0-0.5-0.5-1-1-1l-6.1,0c-3.6,0-6.5,1.6-8.1,4.2l-2.7,4.2c-0.2,0.3-0.2,0.7,0,1l3,5
	c0.1,0.2,0.4,0.4,0.6,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2c3.8-2.5,8.2-3.8,12.7-3.8c3.3,0,6.3-1.8,7.9-4.7l2.7-4.8
	C30,18.2,30,17.8,29.9,17.5z"
                  />
                  <path
                    d="M4.5,18c0.1,0,0.3,0,0.4,0c1.2-1.1,2.7-1.9,4.3-2.4C9.1,15.1,9,14.5,9,14c0-4.4,3.6-8,8-8s8,3.6,8,8c0,0.7-0.1,1.4-0.3,2.1
	C26,15.4,27.5,15,29,15c0.7,0,1.4,0.3,1.9,0.7C31,15.1,31,14.6,31,14c0-1.1-0.1-2.2-0.4-3.3c-0.1-0.5-0.6-0.8-1.1-0.8
	c-1.2,0.2-2.4-0.4-3-1.5c-0.6-1-0.5-2.4,0.2-3.3c0.3-0.4,0.3-1-0.1-1.3C25,2.3,23.1,1.2,21,0.6c-0.5-0.1-1,0.1-1.2,0.6
	C19.3,2.3,18.2,3,17,3s-2.3-0.7-2.8-1.8C14,0.7,13.5,0.4,13,0.6C10.9,1.2,9,2.3,7.4,3.9C7,4.2,7,4.8,7.3,5.2c0.7,1,0.8,2.3,0.2,3.3
	c-0.6,1-1.8,1.6-3,1.5c-0.5-0.1-1,0.3-1.1,0.8C3.1,11.8,3,12.9,3,14s0.1,2.2,0.4,3.3C3.5,17.8,4,18.1,4.5,18z"
                  />
                </svg>
              </div>
            </div>
            <div className="service-child">
              <div className="font-bold">Data Engineering</div>
              <div className="font service-text mt-3">
                Greenfield data-lake solutions using Azure Datafactory, Azure
                databricks, Azure Functions, Azure API services and Azure blob.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-3 mb-5 lg:mb-0">
            <div className="mr-5">
              <div className="service-img flex items-center justify-center">
                <svg
                  fill="#000000"
                  height="50px"
                  width="50px"
                  stroke="#1C274C"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M489.739,244.87h-89.043c0-12.294-9.967-22.261-22.261-22.261h-66.783c-12.294,0-22.261,9.967-22.261,22.261v0.004
			h-13.089c-5.069,0-9.172-4.102-9.172-9.172v-13.094c12.294,0,22.261-9.967,22.261-22.261v-66.783
			c0-12.294-9.967-22.261-22.261-22.261V22.261C267.13,9.967,257.164,0,244.87,0H44.522C32.227,0,22.261,9.967,22.261,22.261v89.043
			C9.967,111.304,0,121.271,0,133.565v66.783c0,12.294,9.967,22.261,22.261,22.261v52.05c0,118.79,96.294,215.085,215.085,215.085
			h52.046c0.002,12.292,9.968,22.256,22.261,22.256h66.783c12.294,0,22.261-9.967,22.261-22.261h89.043
			c12.294,0,22.261-9.967,22.261-22.261V267.13C512,254.836,502.033,244.87,489.739,244.87z M44.522,155.826H244.87v22.261H44.522
			V155.826z M66.783,44.522h155.826v66.783H66.783V44.522z M66.783,274.659v-52.046h155.826v13.089
			c0,29.658,24.035,53.693,53.693,53.693h13.089v155.826h-52.046C143.144,445.222,66.783,368.861,66.783,274.659z M333.913,467.478
			V267.13h22.261v200.348H333.913z M467.478,445.217h-66.783V289.391h66.783V445.217z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="service-child">
              <div className="font-bold">Data Migration</div>
              <div className="font service-text mt-3">
                Our expert team can help you move your on-premises data to the
                cloud with the lowest cost-effective solution the market can
                offer.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-3">
            <div className="mr-5">
              <div className="service-img flex items-center justify-center">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>report-barchart</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="add"
                      fill="#000000"
                      transform="translate(42.666667, 85.333333)"
                    >
                      <path
                        d="M341.333333,1.42108547e-14 L426.666667,85.3333333 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,1.42108547e-14 L341.333333,1.42108547e-14 Z M330.666667,42.6666667 L42.6666667,42.6666667 L42.6666667,298.666667 L384,298.666667 L384,96 L330.666667,42.6666667 Z M106.666667,85.3333333 L106.666,234.666 L341.333333,234.666667 L341.333333,256 L85.3333333,256 L85.3333333,85.3333333 L106.666667,85.3333333 Z M170.666667,149.333333 L170.666667,213.333333 L128,213.333333 L128,149.333333 L170.666667,149.333333 Z M234.666667,106.666667 L234.666667,213.333333 L192,213.333333 L192,106.666667 L234.666667,106.666667 Z M298.666667,170.666667 L298.666667,213.333333 L256,213.333333 L256,170.666667 L298.666667,170.666667 Z"
                        id="Combined-Shape"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="service-child">
              <div className="font-bold">Reporting Solutions</div>
              <div className="font service-text mt-3">
                Our experts are very strong on reporting solutions using Power
                BI, Dax, Power Query, Tableau, Google analytics and Qlik.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 backdrop flex justify-center pb-5">
        <div className="banner-btn">
          <a href="#contact">
            <div
              className="banner-btn-text text-white"
              onClick={() => {
                navigate("/services");
              }}
            >
              View More
            </div>
          </a>
        </div>{" "}
      </div>
    </>
  );
}
