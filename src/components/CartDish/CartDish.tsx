import { CartDishProps } from "../../types/Types";
const CartDish: React.FC<CartDishProps> = ({ cartDishes }) => {
  return (
    <div>
      <p>{cartDishes.quantity}</p>
    </div>
  );
};

export default CartDish;
