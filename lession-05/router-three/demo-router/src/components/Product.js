import { useLocation } from "react-router-dom";

function Product() {
  const { state } = useLocation();

  return (
    <div>
      <h3>Id select {state.categoryId}</h3>
    </div>
  );
}

export default Product;
