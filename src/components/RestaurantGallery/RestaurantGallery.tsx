import { Link } from "react-router-dom";
import { RestaurantModel } from "../../types/Types";
import "./RestaurantGallery.css";
interface Props {
  restaurant: RestaurantModel[];
}
const RestaurantGallery: React.FC<Props> = ({ restaurant }) => {
  return (
    <main>
      {restaurant.map((rest) => (
        <Link to={`/${rest.id}`}>
          <figure className="restaurantgallery-figure">
            <li>{rest.name}</li>
            <img
              className="restaurantgallery-img"
              src={rest.mainPictureUrl}
              alt="restaurant"
            />
            <div className="restaurantgallery-container">
              <p>{rest.location}</p>
              <p>{rest.name}</p>
            </div>
          </figure>
        </Link>
      ))}
    </main>
  );
};
export default RestaurantGallery;
