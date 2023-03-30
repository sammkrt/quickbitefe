import { Link } from "react-router-dom";
import { Dish } from "../../types/Types";
import Counter from "../Counter/Counter";
import "./ItemGallery.css";
interface itemGalleryProps {
  dishes: Dish[];
}
const ItemGallery: React.FC<itemGalleryProps> = ({ dishes }) => {
  return (
    <main className="itemgallery-main">
      <h1>Menu</h1>
      {dishes.map((dish) => (
        <figure className="itemgallery-figure">
          <div className="itemgallery-info">
            <p className="itemgallery-p">{dish.name}</p>
            <p className="itemgallery-p">{dish.description}</p>
            <p className="itemgallery-p">
              Price:{" "}
              <span className="itemgallery-dish-price">{dish.price}</span>
            </p>
            <div className="itemgallery-container">
              <Counter />
              <Link to="/cart">
                <button className="itemgallery-button">Add to Cart</button>
              </Link>
            </div>
          </div>
        </figure>
      ))}
    </main>
  );
};
export default ItemGallery;
