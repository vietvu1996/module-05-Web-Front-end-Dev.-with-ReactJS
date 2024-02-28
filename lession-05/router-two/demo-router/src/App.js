import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import Product from "./components/Product";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />}></Route>
        <Route path="/product/:categoryId" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
