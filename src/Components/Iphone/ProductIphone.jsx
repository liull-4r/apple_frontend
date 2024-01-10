import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NOT from "../404/NOT";
function ProductIphone() {
  const [product, setProduct] = useState([]);
  console.log(useParams());
  const { productID } = useParams();
  console.log(productID);

  useEffect(() => {
    fetch("https://apple-backend-u888.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const productList = data.filter((p) => p.product_url == productID);

        setProduct(productList);
      })
      .catch((err) => {
        console.log("unable to fetch data", err);
      });
  }, []);

  console.log(product);
  if (product.length) {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {product.map((p, i) => {
          return (
            <div key={i}>
              <h1 className="font-weight-bold">{p.product_name}</h1>
              <h4 className="display-4 text-center">
                {p.product_brief_description}
              </h4>
              <div className="row align-items-center my-5 mx-5">
                <div className="col-md">
                  <h5>{`starting at ${p.starting_price}`}</h5>
                  <h5>{p.price_range}</h5>
                  <h5>{p.product_description}</h5>
                </div>
                <div className="col-md">
                  <img src={p.product_img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <NOT />;
  }
}

export default ProductIphone;
