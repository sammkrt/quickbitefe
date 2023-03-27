import { Link } from "react-router-dom";
import "./RestaurantGallery.css";
function RestaurantGallery() {
  return (
    <main>
      <Link to="/restaurant">
      <figure className="restaurantgallery-figure">
        <img className="restaurantgallery-img" src="./assets/restaurant.png" alt="restaurant" />
        <div className="restaurantgallery-container">
        <h2 className="restaurantgallery-h2">Restaurant name</h2>
        <p>Type of food</p>
        <p>Delivery price</p>
        </div>
      </figure>
      </Link>
    </main>
  );
}
export default RestaurantGallery;
