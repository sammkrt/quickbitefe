import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartDishProps, Dish, User } from "../../types/Types";
import Counter from "../Counter/Counter";

const CartDish: React.FC<CartDishProps> = ({ cartDishes }) => {
  const [user, setUser] = useState<User | null>(null);
  //counter
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    // if (counter > 0) {
      setCounter((count) => count - 1);
    // }
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    fetch("http://localhost:5242/Auth/user", {
      method: "GET",
      headers: { Authorization: `Bearer ${jwt}` },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        console.log(user?.cartId);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);


//fetchDishbyId
  let { id } = useParams();
  const [dishesById, setDishesById] = useState<Dish>();
  const fetchDishesById = async (id: any) => {
    const result = await fetch(
      `http://localhost:5242/api/Dishes/${cartDishes.dishId}`
    );
    const data = await result.json();
    setDishesById(data);
  };
  useEffect(() => {
    fetchDishesById(id);
  }, [id]);


let finalQuantity = counter + cartDishes.quantity 
if (finalQuantity < 0) {
  finalQuantity = 0
}



  const handlePatchCart = async () => {
    const response = await fetch(
      `http://localhost:5242/api/Carts/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId : user?.id,
          dishId : dishesById?.id,
          quantity : finalQuantity,
        }),
      }
    );
    if (response.ok) {
    } else {
      console.error("Failed to patch cart");
    }
  };

  return (
    <div>
       <div className="cart-container">
       <div className="button-container">
              <button className="control-button" onClick={decrease}>
                -
              </button>
              <span className="counter-output">{counter}</span>
              <button className="control-button" onClick={increase}>
                +
              </button>
            </div>
          <p>{dishesById?.name}</p>
          <p>{cartDishes.quantity}</p>
          <button className="cart-add-button" onClick={()=> {handlePatchCart()}}>Update cart</button>
        </div>
      
    </div>
  );
};

export default CartDish;
