import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartDishProps, Dish } from "../../types/Types";
const CartDish: React.FC<CartDishProps> = ({ cartDishes }) => {
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
  return (
    <div>
      <p>{dishesById?.name}</p>
      <p>{cartDishes.quantity}</p>
    </div>
  );
};

export default CartDish;
