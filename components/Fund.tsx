import { MouseEventHandler } from 'react';
import { FundDetails } from '@/utils/types';
import Button from './Button';

interface FundProps extends FundDetails {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Funds({ name, likelyProjectedReturns, onClick }: FundProps) {
  return (
    <div className="p-4 mb-4 last:mb-0 grid grid-cols-[1fr,auto] border border-cushon rounded">
      <div>
        <span className="block text-lg font-medium">{name}</span>
        <span className="block text-xl font-bold text-cushon">
          Likely Projected Returns: {likelyProjectedReturns}%
        </span>
      </div>
      <Button onClick={onClick}>Select</Button>
    </div>
  );
}
