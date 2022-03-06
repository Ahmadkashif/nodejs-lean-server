import { CustomerType } from '../enums';

export interface Customer {
  id: number;
  fullName: string;
  userName: string;
  phone: string;
  email: string;
  disabled: boolean;
  type: CustomerType;
}

export interface SignInCustomer {
  id: number;
  fullName: string;
  userName: string;
  phone: string;
  email: string;
  disabled: boolean;
  type: CustomerType;
}

export interface PaymentPlan {
  name: string;
  payment_method: string;
  price: number;
  validityInDays: number;
  startDate: string;
  endDate: string;
}

export interface CustomerDto {
  id: number;
  disabled: boolean;
  type: CustomerType;
  email: string;
  phone: string;
}
