import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dish } from "../../types/Types";
import Counter from "../Counter/Counter";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemGallery.css";
interface itemGalleryProps {
  dishes: Dish[];
}
interface LoginDto {
  cartId : number
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
const ItemGallery: React.FC<itemGalleryProps> = ({ dishes }) => {

  const [dishId, setdishId] = useState(""); 
  const [user, setUser] = useState<User | null>(null);

  return (
    <main className="itemgallery-main">
      <h1>Menu</h1>
      {dishes.map((dish) => (
        <ItemCard dish={dish} key={dish.id}/>
      ))}
    </main>
  );
};
export default ItemGallery;


