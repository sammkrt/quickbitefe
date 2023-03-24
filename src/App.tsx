function App() {
  const fetchingdata = async () => {
    // const response = await fetch("https://localhost:7229/WeatherForecast");
    const response = await fetch("https://quickbitebe.azurewebsites.net/weatherforecast"
    );
    const result = await response.json();
    console.log(result);
  };
  fetchingdata();
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}
export default App;
