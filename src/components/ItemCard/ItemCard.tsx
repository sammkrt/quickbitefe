import "./ItemCard.css";
import { Link } from "react-router-dom";
import { Dish } from "../../types/Types";
import { useState } from "react";

interface itemCardProps {
  dish: Dish;
}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
  cartId: number;
}
const ItemCard : React.FC<itemCardProps> = ({dish: Dish}) => {
  const [dishId, setdishId] = useState("");
  const [quantity, setquantity] = useState("");
  const [cartId,setCartId] = useState();
  const [user, setUser] = useState<User | null>(null);
  const handleAddToCart = async (dishId : number) => {
    const response = await fetch(`http://localhost:5242/api/Carts?userId=${user?.id}}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dishId,
        quantity,
      }),
    });
    if (response.ok) {
      
    } else {
      console.error("Failed to register");
    }
    addToCart(dishId, quantity);
  };


  return (
    <main>
      <Link to="/menuItem">
      <figure className="itemgallery-figure">
          <div className="itemgallery-info">
            <p className="itemgallery-p">{}</p>
            <p className="itemgallery-p">{dish.id}</p>
            <p className="itemgallery-p">{dish.description}</p>
            <p className="itemgallery-dish-price">{dish.price}</p>
            <div className="itemgallery-container">
              <Counter />
              <Link to="/cart">
                <button
                  className="itemgallery-button"
                  onClick = {()=>{handleAddToCart(dish.id)}}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </figure>
      </ Link>
    </main>
  );
}
export default ItemCard;
