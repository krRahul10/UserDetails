import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./layout/Navbar";
import { Route, Routes } from "react-router-dom";
import NotFount from "./pages/NotFount";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { User } from "./components/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/user/:id" element={<User />} />
        <Route element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default App;
