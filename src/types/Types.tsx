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
