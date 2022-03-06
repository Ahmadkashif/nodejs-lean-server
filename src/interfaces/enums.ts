export enum PaymentMethodType {
  'managed' = 1,
  'unmanaged' = 2,
}

export enum PaymentPlatform {
  'android' = 1,
  'ios' = 2,
  'web' = 3,
  'stripe' = 4,
}

export enum PaymentStatus {
  'pending' = 1,
  'paid' = 2,
  'failed' = 3,
  'hold' = 4,
}

export enum PlanType {
  'trail' = 1,
  'one-time' = 2,
  'recurring' = 3,
}

export enum TransactionType {
  'new' = 1,
  'renewal' = 2,
}

export enum CustomerType {
  'free' = 1,
  'paying' = 2,
  'inactive' = 3
}

export enum PaymentServiceStatus {
  'active' = 1,
  'canceled' = 2,
  'grace' = 3,
  'hold' = 4,
  'expired' = 5,
  'paused' = 6,
}
