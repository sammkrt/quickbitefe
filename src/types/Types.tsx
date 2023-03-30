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
export interface LoginDto {
  email: string;
  password: string;
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
}
export interface ErrorResponse {
  message: string;
}
