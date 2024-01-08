import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Iphone.css";
function Iphone() {
  const [iphone, setIphone] = useState([]);
  useEffect(() => {


    fetch("https://apple-backend-2f5w.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
     
        setIphone(data);
      })
      .catch((err) => {
        console.log("unable to fetch data", err);
      });
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1 className=" font-weight-bold">Iphone</h1>
      <h2 className="">The Best For The Brightest</h2>

      {iphone?.map((ip,i) => {
        return (
          <div key={ip.product_id} className="row align-items-center my-5 ">
            <div
              className={`col-md mx-5  ${
                i % 2 == 0 ? "order-md-1" : "order-md-2"
              }  `}
            >
              <img src={ip.product_img} alt="" />
            </div>
            <div
              className={`col-md text-center my-5 mx-5  ${
              i % 2 == 0 ? "order-md-2" : "order-md-1"
              }   ftext `}
            >
              <h3 className="display-4 font-weight-bold">{ip.product_name}</h3>
              <p>{ip.product_brief_description}</p>
              <p>{`starting at ${ip.starting_price}`}</p>
              <p>{ip.price_range}</p>
              <ul>
                <li>
                  <Link className="flearn" to={`/iphone/${ip.product_url}`}>
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Iphone;
