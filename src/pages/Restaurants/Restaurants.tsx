import { useEffect, useState } from "react";
import { Dish, RestaurantModel } from "../../types/Types";
import { useParams } from "react-router-dom";
import ItemGallery from "../../components/ItemGallery/ItemGallery";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./Restaurants.css";
function Restaurant() {
  let { id } = useParams();
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [restaurantById, setRestaurantById] = useState<RestaurantModel>();
  const fetchRestaurantById = async (id: any) => {
    const result = await fetch(`http://localhost:5242/api/Restaurants/${id}`);
    const data = await result.json();
    setRestaurantById(data);
    setDishes(data.dishes);
    console.log(data);
    console.log(id);
  };
  useEffect(() => {
    fetchRestaurantById(id);
  }, []);
  return (
    <main>
      <HeaderComponent />
      <figure className="restaurantgallery-figure">
        <li>{restaurantById?.name}</li>
        <img
          className="restaurantgallery-img"
          src={restaurantById?.mainPictureUrl}
          alt="restaurant"
        />
        <div className="restaurantgallery-container">
          <p>{restaurantById?.description}</p>
          <p>{restaurantById?.email}</p>
        </div>
        {restaurantById?.dishes.map((dish) => (
          <li>{dish.name}</li>
        ))}
      </figure>
      <ItemGallery dishes={dishes} />
      <FooterComponent />
    </main>
  );
}
export default Restaurant;
