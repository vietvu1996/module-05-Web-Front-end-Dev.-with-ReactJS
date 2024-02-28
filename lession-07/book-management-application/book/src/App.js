import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookForm from "./pages/BookForm";
import Books from "./pages/Books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<Books />}/>
        <Route path="/books/add" element={<BookForm />}/>
        <Route path={`/books/update/:bookId`} element={<BookForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
