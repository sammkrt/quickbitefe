function App() {
  const fetchingdata = async () => {
    const response = await fetch("https://quickbitebe.azurewebsites.net/weatherforecast");
    const result = await response.json();
    console.log(result);
  };
  fetchingdata();
  return <></>;
}
export default App;
