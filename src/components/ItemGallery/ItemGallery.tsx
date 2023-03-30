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
  const addToCart = (dishId: any, quantity: any) => {};
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
        <ItemCard dish = {dish}/>
      ))}
    </main>
  );
};
export default ItemGallery;


