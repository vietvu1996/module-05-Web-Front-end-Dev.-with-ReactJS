import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PRODUCT_API_PREFIX } from "../../constants/AppConstant";

function ProductEdit() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      axios
        .get(`${PRODUCT_API_PREFIX}/${productId}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [productId]);

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    axios
      .put(`${PRODUCT_API_PREFIX}/${productId}`, product)
      .then((res) => {
        alert(`Edit product ${JSON.stringify(res.data)} successfully!!!`);
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });
  }

  function getProducts() {
    navigate("/");
  }

  return (
    <div>
      <h1>Product Edit</h1>
      <form>
        <div>
          <label>Id</label>
          <input
            readOnly
            name="id"
            value={product.id || ""}
            onChange={handleChange}
          />
        </div>
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
        <button type="button" onClick={getProducts}>
          Back
        </button>
        &nbsp;
        <button type="button" onClick={handleSubmit}>
          Edit
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
