import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_API_PREFIX } from "../../constants/AppConstant";

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    await axios
      .get(`${PRODUCT_API_PREFIX}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }

  function handleCreate() {
    navigate("/products/add");
  }

  return (
    <>
      <div>
        <h1>List of Products</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th colSpan={2}>
                <button type="button" onClick={handleCreate}>
                  Create
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id} </td>
                <td>{product.name} </td>
                <td>{product.description} </td>
                <td>
                  <img
                    width={100}
                    height={100}
                    src={product.imgUrl}
                    alt="Product Avatar"
                  />
                </td>
                <td>{product.price} </td>
                <td>{product.quantity} </td>
                <td>
                  <a href={`/products/${product.id}`}>Detail</a>
                </td>
                <td>
                  <a href={`/products/edit/${product.id}`}>Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductList;
