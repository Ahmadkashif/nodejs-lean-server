export interface DataStoredInToken {
  id: number;
  is_customer: boolean;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}
