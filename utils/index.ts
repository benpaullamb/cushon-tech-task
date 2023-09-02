export interface Investment {
  fund: string;
  amount: number;
  timestamp: number;
}

export async function invest(fund: string, amount: number) {
  const newInvestment = { fund, amount, timestamp: Date.now() };
  const investmentsItem = sessionStorage.getItem('investments');

  if (!investmentsItem) {
    sessionStorage.setItem('investments', JSON.stringify([newInvestment]));
  } else {
    const investments: Investment[] = JSON.parse(investmentsItem);
    investments.push(newInvestment);
    sessionStorage.setItem('investments', JSON.stringify(investments));
  }

  return Promise.resolve(true);
}

export async function getInvestments(): Promise<Investment[]> {
  const investmentsItem = sessionStorage.getItem('investments');

  if (!investmentsItem) {
    return Promise.resolve([]);
  }

  return Promise.resolve(JSON.parse(investmentsItem));
}
