import { useState } from 'react';
import { FundDetails } from '@/utils/types';
import Title from './Title';
import Input from './Input';
import Button from './Button';
import { invest } from '@/utils';

interface FormProps {
  fund: FundDetails;
}

export default function Form({ fund }: FormProps) {
  const [amount, setAmount] = useState(0);
  const [complete, setComplete] = useState(false);

  const save = async () => {
    const success = await invest(fund.name, amount);
    if (success) {
      setAmount(0);

      setComplete(true);
      setTimeout(() => {
        setComplete(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Title>Amount to Invest into {fund.name || '...'}</Title>

      <div className="flex items-center gap-4">
        <Input
          placeholder="1000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <span>GBP</span>
      </div>

      <Button className="mt-4" onClick={save}>
        Invest
      </Button>

      {complete && (
        <p className="mt-4 text-lg font-bold text-cushon">
          Thank you for investing with Cushon!
        </p>
      )}
    </div>
  );
}
