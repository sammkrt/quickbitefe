import { Link } from "react-router-dom";
import { RestaurantModel } from "../../types/Types";
import "./RestaurantGallery.css";
interface Props {
  restaurant: RestaurantModel[];
}
const RestaurantGallery: React.FC<Props> = ({ restaurant }) => {
  return (
    <main>
      {restaurant.map((restaurant) => (
        <Link to={`/${restaurant.id}`}>
          <figure className="restaurantgallery-figure" key={restaurant.id}>
            <div className="restaurantgallery-container">
              <img
                className="restaurantgallery-img"
                src={restaurant.mainPictureUrl}
                alt="restaurant"
              />
            </div>
            <div className="restaurantgallery-container">
              <p>{restaurant.name}</p>
              <p>{restaurant.location}</p>
              <p>{restaurant.name}</p>
            </div>
          </figure>
        </Link>
      ))}
    </main>
  );
};
export default RestaurantGallery;
