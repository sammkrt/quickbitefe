import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start/Start";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile /Profile";
import Cart from "./pages/Cart/Cart";
import MenuItem from "./pages/MenuItem/MenuItem";
import Payment from "./pages/Payment/Payment";
import Restaurant from "./pages/Restaurants/Restaurants";
import MyOrder from "./pages/MyOrder/MyOrder";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/menuItem" element={<MenuItem />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/myOrder" element={<MyOrder />} />
    </Routes>
  );
}
export default App;
