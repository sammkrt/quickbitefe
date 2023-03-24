import React from "react";

function App() {

  const fetchingdata = async () => {
    const response = await fetch(
      "https://localhost:7229/WeatherForecast"
    );
    const result = await response.json();
    console.log(result);
  };
  fetchingdata();
  return <></>;
}
export default App;