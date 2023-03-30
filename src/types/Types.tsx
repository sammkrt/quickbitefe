export interface Dish {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  price: number;
  restaurantId: number;
}

export interface RestaurantModel {
  id: number;
  name: string;
  description: string;
  location: string;
  phoneNumber: string;
  email: string;
  deliveryCost: number;
  mainPictureUrl: string;
  dishes: Dish[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  cartId: number;
  cart: {
    id: number;
    cartDishes: any[];
    totalPrice: number;
  };
  orders: {
    id: number;
    dishes: any;
    address: string;
    userId: number;
    totalPrice: number;
  }[];
}