import { Link } from "react-router-dom";
import "./RestaurantGallery.css";
import {RestaurantModel} from "../../types/Types";


interface Props {
  restaurant: RestaurantModel[]
}

const RestaurantGallery: React.FC<Props> = ({restaurant}) =>{
  return (
    <main>
      
      
        
        {/* <h2 className="restaurantgallery-h2">{restaurant[0].name}</h2> */}
          {restaurant.map((rest => 
          <Link to={`/restaurant/${rest.id}`}>
          <figure className="restaurantgallery-figure">
            <li>{rest.name}</li>
            <img className="restaurantgallery-img" src={rest.mainPictureUrl} alt="restaurant" />
          <div className="restaurantgallery-container">

           <p>{rest.location}</p>
           <p>{rest.name}</p>
        </div>
            </figure>
            </Link>
            ))}
     
    </main>
  );
}
export default RestaurantGallery;
