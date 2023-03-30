import { useEffect, useState } from "react";
import { RestaurantModel } from "../../types/Types";
import SearchBar from "../../components/SearchBar/SearchBar";
import RestaurantGallery from "../../components/RestaurantGallery/RestaurantGallery";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import "./HomePage.css";
function HomePage() {
  // const [restaurant, setRestaurant] = useState<RestaurantModel[]>([]);
  // const fetchRestaurant = async () => {
  //   const result = await fetch("http://localhost:5242/api/Restaurants");
  //   const data = await result.json();
  //   setRestaurant(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetchRestaurant();
  // }, []);
  const [restaurant, setRestaurant] = useState<RestaurantModel[]>([]);
  const fetchRestaurant = async () => {
    const result = await fetch("http://localhost:5242/api/Restaurants");
    const data = await result.json();
    setRestaurant(data);
    console.log(data);
  };
  useEffect(() => {
    fetchRestaurant();
  }, []);
  const filterCard = (value: any) => {
    if (value === "") {
      fetchRestaurant();
    } else {
      setRestaurant((previousState) =>
        previousState.filter((restaurant) =>
          restaurant.dishes.some((dish) =>
            value
              .toLowerCase()
              .split(" ")
              .every((word: any) => dish.name.toLowerCase().includes(word))
          )
        )
      );
    }
  };
  const filterPizza = () => {
    setRestaurant((previousState) =>
      previousState.filter((restaurant) =>
        restaurant.dishes.some((dish) =>
          dish.name.toLowerCase().includes("pizza")
        )
      )
    );
  };
  const filterBurger = () => {
    setRestaurant((previousState) =>
      previousState.filter((restaurant) =>
        restaurant.dishes.some((dish) =>
          dish.name.toLowerCase().includes("burger")
        )
      )
    );
  };
  const filterBitterballen = () => {
    setRestaurant((previousState) =>
      previousState.filter((restaurant) =>
        restaurant.dishes.some((dish) =>
          dish.name.toLowerCase().includes("bitterballen")
        )
      )
    );
  };
  const filterPasta = () => {
    setRestaurant((previousState) =>
      previousState.filter((restaurant) =>
        restaurant.dishes.some((dish) =>
          dish.name.toLowerCase().includes("pasta")
        )
      )
    );
  };
  return (
    <main className="home-main">
      <HeaderComponent />
      {/* <SearchBar /> */}
      <div className="home-search-container">
        <input
          className="home-input"
          type="text"
          placeholder="Search"
          onChange={(e: any) => filterCard(e.target.value)}
        />
        <button className="home-button">
          Search
        </button>
      </div>
      <h1 className="home-h1">Categories</h1>
      <div className="container">
        <section onClick={filterPizza} className="home-section">
          <img className="home-img" src="./assets/pizza.png" alt="pizza" />
          <p>Pizza</p>
        </section>
        <section onClick={filterBurger} className="home-section">
          <img className="home-img" src="./assets/burger.png" alt="burger" />
          <p>Burger</p>
        </section>
        <section onClick={filterBitterballen} className="home-section">
          <img
            className="home-img"
            src="./assets/chinese.png"
            alt="Bitterballen"
          />
          <p>Bitterballen</p>
        </section>
        <section onClick={filterPasta} className="home-section">
          <img className="home-img" src="./assets/pasta.png" alt="pasta" />
          <p>Pasta</p>
        </section>
      </div>
      <h1 className="home-h1">Restaurants</h1>
      <RestaurantGallery restaurant={restaurant} />
      <FooterComponent />
    </main>
  );
}
export default HomePage;
