import { PlanType } from '../enums';

export interface Plan {
  id: number;
  name: string;
  code: string;
  type: PlanType;
  days: number;
  gracePeriod: number;
  price: number;
  active: boolean;
  planReferenceIos: string;
  planReferenceAndroid: string;
  planReferenceStripe: string;
}

export interface PlanDto {
  id: number;
  name: string;
  code: string;
  type: PlanType;
  days: number;
  price: number;
  planReferenceIos: string;
  planReferenceAndroid: string;
  planReferenceStripe: string;
}
