import image from "./rt_store.jpg";
import "./Products.css";

export default function Products() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-20 font lg:mx-5">
        <div className="mt-6 lg:mt-0 flex items-center justify-center xl:px-3">
          <img className="lg:rounded-xl" src={image}></img>
        </div>
        <div className="flex items-center xl:px-3 mt-5 lg:mt-0">
          <div className="text-center px-3">
            <div className="text-5xl font-bold color uppercase">Retail 360</div>
            <div className="text-3xl font-bold mt-3">In-house Product</div>
            <div className="mt-3">
              Retail 360, our in-house solution, empowers retailers to securely
              capture customer data for electronic invoicing, flexible delivery,
              promotions, discounts, and valuable business insights.
            </div>
            <div className="mt-3">
              To acquire Retail 360, kindly reach out to us, and our team will
              arrange a convenient demo at your preferred time.
            </div>
            <div className="flex justify-center">
              <div className="mt-3">
                <div className="color font-semibold text-xl">Key Features:</div>
                <ul className="grid xl:grid-cols-2 text-left">
                  <li className="pr-3">
                    Analyze product value and quantity per order.
                  </li>

                  <li>Recognize valuable customers.</li>
                  <li className="pr-3">
                    Uncover true demand and past lost sales.
                  </li>
                  <li>Calculate optimal order and purchase quantities.</li>
                  <li className="pr-3">
                    Identify top-selling, low-selling, and mid-range products.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
