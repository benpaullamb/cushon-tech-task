export interface FundDetails {
  name: string;
  likelyProjectedReturns: number;
}

export interface Investment {
  fund: string;
  amount: number;
  timestamp: number;
}