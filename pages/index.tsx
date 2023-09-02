import { useState } from 'react';
import { FundDetails } from '@/utils/types';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Section from '@/components/Section';
import FundList from '@/components/FundList';
import Form from '@/components/Form';

export default function Home() {
  const [selectedFund, setSelectedFund] = useState<FundDetails>({
    name: '',
    likelyProjectedReturns: 0,
  });

  return (
    <div>
      <Header />
      <Banner title="ISA Investments" />
      <Section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <FundList onFundSelected={setSelectedFund} />
        {selectedFund.name && <Form fund={selectedFund} />}
      </Section>
    </div>
  );
}
