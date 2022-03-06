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

export interface CustomerDto {
  id: number;
  disabled: boolean;
  type: CustomerType;
  email: string;
  phone: string;
}
