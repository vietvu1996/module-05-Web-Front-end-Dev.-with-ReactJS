import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PRODUCT_API_PREFIX } from "../../constants/AppConstant";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
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

  function getProducts() {
    navigate("/products");
  }

  function removeProduct() {
    if (productId) {
      axios
        .delete(`${PRODUCT_API_PREFIX}/${productId}`)
        .then((res) => {
          alert(`Remove product ${JSON.stringify(res.data)} successfully!!!`);
          navigate("/");
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <p>
        <b>Id:</b> {product.id}
      </p>
      <p>
        <b>Name</b> {product.name}
      </p>
      <p>
        <b>Description:</b> {product.description}
      </p>
      <p>
        <b>Image:</b>{" "}
        <img
          width={100}
          height={100}
          src={product.imgUrl}
          alt="Product Avatar"
        />
      </p>
      <p>
        <b>Price:</b> {product.price}
      </p>
      <p>
        <b>Quantity:</b> {product.quantity}
      </p>
      <button type="button" onClick={getProducts}>
        Back
      </button>
      &nbsp;
      <button type="button" onClick={removeProduct}>
        Remove
      </button>
    </div>
  );
}

export default ProductDetail;
