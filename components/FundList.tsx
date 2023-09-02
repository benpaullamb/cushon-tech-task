import { FundDetails } from '@/utils/types';
import Title from './Title';
import Fund from './Fund';

interface FundListProps {
  onFundSelected: (fund: FundDetails) => void;
}

export default function FundList({ onFundSelected }: FundListProps) {
  const funds = [
    {
      name: 'Cushon Equities Fund',
      likelyProjectedReturns: 5.41,
    },
    {
      name: 'CushonMix medium risk/return ISA',
      likelyProjectedReturns: 5.57,
    },
    {
      name: 'Fidelity Multi Asset Allocator Growth W Acc ISA',
      likelyProjectedReturns: 5.32,
    },
    {
      name: 'VT AJ Bell Balanced I Acc ISA',
      likelyProjectedReturns: 5.29,
    },
  ];

  return (
    <div>
      <Title>Select a Fund</Title>
      {funds.map((fund) => (
        <Fund key={fund.name} {...fund} onClick={() => onFundSelected(fund)} />
      ))}
    </div>
  );
}
