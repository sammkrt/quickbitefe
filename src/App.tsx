import { Routes, Route } from "react-router-dom";
import Start from "./components/start/Start";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}
export default App;
