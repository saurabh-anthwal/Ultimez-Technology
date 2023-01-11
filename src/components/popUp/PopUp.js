import React, { useEffect, useState } from "react";
import "./PopUp.css";

const PopUp = () => {
  const [input, setInput] = useState({
    productName: "",
    originalPrice: "",
    salePrice: "",
    productType: "",
    description: "",
  });

  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    // POST Requst
    const res = await fetch(
      "https://lobster-app-ddwng.ondigitalocean.app/product/add_new",
      {
        method: "POST",
        body: JSON.stringify({
          product_name: input.productName,
          original_price: input.originalPrice,
          sale_price: input.salePrice,
          product_type: input.productType,
          description: input.description,
        }),
        headers: {
          api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.json();
    console.log(data);
    setInput({
      productName: "",
      originalPrice: "",
      salePrice: "",
      productType: "",
      description: "",
    });
  }

  return (
    <div className="popUpFlex">
      <div className="form">
        <h1 className="heading">Create New Product</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="text-form"
            name="productName"
            value={input.productName}
            type="text"
            placeholder="Product name"
            onChange={handleOnChange}
          />
          <br />
          <br />
          <input
            name="originalPrice"
            value={input.originalPrice}
            onChange={handleOnChange}
            className="text-form"
            type="text"
            placeholder="Original Price"
          />
          <br />
          <br />
          <input
            name="salePrice"
            value={input.salePrice}
            onChange={handleOnChange}
            className="text-form"
            type="text"
            placeholder="Sale Price"
          />
          <br />
          <br />
          <input
            name="productType"
            value={input.productType}
            onChange={handleOnChange}
            className="text-form"
            type="text"
            placeholder="Product Type"
          />
          <br />
          <br />
          <textarea
            name="description"
            value={input.description}
            onChange={handleOnChange}
            className="text-form"
            placeholder="Description"
          />
          <br />
          <br />
          <div>
            <button className="btn">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
