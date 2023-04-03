import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartDishProps, Dish, User } from "../../types/Types";

const CartDish: React.FC<CartDishProps> = ({ cartDishes, updateCart }) => {
  const [user, setUser] = useState<User | null>(null);
  const [counter, setCounter] = useState(cartDishes.quantity > 0 ? cartDishes.quantity : 0);
  const [dishesById, setDishesById] = useState<Dish>();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { id } = useParams();

  const fetchDishesById = async () => {
    const data = await fetch(`http://localhost:5242/api/Dishes/${cartDishes.dishId}`).then(res => res.json());
    setDishesById(data);
  };

  const handlePatchCart = async () => {
    const response = await fetch(`http://localhost:5242/api/Carts/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user?.id, dishId: dishesById?.id, quantity: counter }),
    });
    if (response.ok) {
      updateCart({ ...cartDishes, quantity: counter });
      const data = await fetch(`http://localhost:5242/api/Carts/${user?.cartId}`).then(res => res.json());
      setTotalPrice(data.totalPrice);
    }
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    fetch("http://localhost:5242/Auth/user", {
      method: "GET",
      headers: { Authorization: `Bearer ${jwt}` },
      credentials: "include",
    }).then(res => res.json()).then(setUser).catch(console.error);
  }, []);

  useEffect(() => {
    fetchDishesById();
  }, []);

  const handleDecreaseCounter = () => {
    setCounter(counter => counter - 1 >= 0 ? counter - 1 : 0);
  }

  return (
    <main>
      {cartDishes.quantity > 0 && (
        <div className="cart-container">
          <div className="button-container">
            <button className="control-button" onClick={handleDecreaseCounter}>-</button>
                <span className="counter-output">{counter}</span>
            <button className="control-button" onClick={() => setCounter(count => count + 1)}>+</button>
          </div>
          <p>{dishesById?.name}</p>
          <p>{dishesById?.price}$$</p>
          <p>{cartDishes.quantity}</p>
          <button className="cart-add-button" onClick={handlePatchCart}>Update cart</button>
        </div>
      )}
    </main>
  );
};

export default CartDish;


