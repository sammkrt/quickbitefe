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
  


 

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    // if (!jwt) {
    //   navigate('/login');
    //   return;
    // }

    fetch('http://localhost:5242/Auth/user', {
      method: 'GET',
      headers: { Authorization: `Bearer ${jwt}` },
      credentials: 'include',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        console.log(user?.cartId);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);






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


