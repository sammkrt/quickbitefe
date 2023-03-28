import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Payment from "./components/Payment";
import Register from "./components/Register";

function App() {

  // const fetchingdata = async () => {
  //   const response = await fetch(
  //     "https://localhost:7229/WeatherForecast"
  //   );
  //   const result = await response.json();
  //   console.log(result);
  // };
  // fetchingdata();

  
  return <>
  <Register />
  <Login />
  <Logout />
  <Payment />
  </>;
}
export default App;