import { Link } from "react-router-dom";
import { Dish } from "../../types/Types";
import ItemCard from "../ItemCard/ItemCard";
import './ItemGallery.css'

interface itemGalleryProps {
  dishes : Dish[]
}



const ItemGallery: React.FC<itemGalleryProps> = ({dishes}) =>{
    return (
      <main>
        List of itemCard
        {/* {dishes[0].name} */}
        {dishes.map((dish =>
                  <Link to="/menuItem">
                  <figure className="itemcard-figure">
                    <div className="itemcard-info">
                    <h2>{dish.name}</h2>
                    <p>{dish.description}</p>
                    <p className="itemcard-dish-price">Dish price</p>
                    </div>
                    
                    <div className="itemcard-image-container">
                    <img
                      className="itemcard-img"
                      src="./assets/burger-pic.png"
                      alt="dish"
                    />
                    </div>
                    
                  </figure>
                  </ Link>
          
          ))}

       
      </main>
    );
  }
  export default ItemGallery;
  