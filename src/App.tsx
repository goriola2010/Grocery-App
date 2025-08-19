import "./App.css";
import { Routes, Route } from "react-router-dom";
import Heropage from "./Pages/page.tsx";
import Login from "./Pages/Login.tsx";
import Register from "./Pages/Register.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Heropage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
