import { MemberType } from '@/interfaces/enums';

export interface Member {
  id: number;
  fullName: string;
  userName: string;
  phone: string;
  email: string;
  disabled: boolean;
  type: MemberType;
  stripeId: string;
}

export interface SignInMember {
  id: number;
  fullName: string;
  userName: string;
  phone: string;
  email: string;
  disabled: boolean;
  type: MemberType;
  paymentPlan?: PaymentPlan;
  is_customer?: boolean;
  is_premium?: boolean;
}

export interface PaymentPlan {
  name: string;
  payment_method: string;
  price: number;
  validityInDays: number;
  startDate: string;
  endDate: string;
}

export interface MemberDto {
  id: number;
  disabled: boolean;
  type: MemberType;
  stripeId: string;
  email: string;
  phone: string;
}
