import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import ContactDetail from "./pages/ContactDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contacts" element={<Contact />} />
        <Route path="/contacts/add" element={<ContactDetail />} />
        <Route path={`/contacts/edit/:contactId`} element={<ContactDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
