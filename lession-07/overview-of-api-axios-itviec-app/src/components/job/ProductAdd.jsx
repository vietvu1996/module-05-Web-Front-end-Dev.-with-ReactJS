import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_API_PREFIX } from "../../constants/AppConstant";

function ProductAdd() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    axios
      .post(`${PRODUCT_API_PREFIX}/products`, product)
      .then((res) => {
        alert(`"Create product ${JSON.stringify(res.data)} successfully!!!`);
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <div>
      <h1>Product Add</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={product.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            name="description"
            value={product.description || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            name="imgUrl"
            value={product.imgUrl || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            name="price"
            value={product.price || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            name="quantity"
            value={product.quantity || ""}
            onChange={handleChange}
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
