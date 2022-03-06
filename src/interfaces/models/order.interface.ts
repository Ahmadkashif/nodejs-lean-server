import { OrderType } from '../enums';

export interface Order {
  id: number;
  name: string;
  code: string;
  type: OrderType;
  days: number;
  price: number;
  active: boolean;
}

export interface OrderDto {
  id: number;
  name: string;
  code: string;
  type: OrderType;
  days: number;
  price: number;
}
