import { Routes, Route } from "react-router-dom";
import Start from "./components/start/Start";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import "./App.css";
import Restaurant from "./pages/Restaurant/Restaurant";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import MenuItem from "./pages/MenuItem/MenuItem";
import Payment from "./pages/Payment/Payment";
import MyOrder from "./pages/MyOrder/MyOrder";
import StartPage from "./pages/StartPage/StartPage";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Restaurant" element={<Restaurant />} />
      <Route path="/MenuItem" element={<MenuItem />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/MyOrder" element={<MyOrder />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
