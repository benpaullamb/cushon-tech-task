import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Investment } from '@/utils/types';
import { getInvestments } from '@/utils';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Section from '@/components/Section';

dayjs.extend(localizedFormat);

export default function MyInvestments() {
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    (async () => {
      const storedInvestments = await getInvestments();
      setInvestments(storedInvestments);
    })();
  }, []);

  function formatCurrency(amount: number): string {
    return amount.toLocaleString('en-GB', {
      style: 'currency',
      currency: 'GBP',
    });
  }

  return (
    <div>
      <Header />
      <Banner title="My Investments" />
      <Section>
        <table className="w-full xl:w-2/3 table-auto">
          <thead>
            <tr className="bg-cushon">
              <th className="p-2 text-lg text-left text-white">Fund Name</th>
              <th className="p-2 text-lg text-left text-white">Timestamp</th>
              <th className="p-2 text-lg text-right text-white">Amount (GBP)</th>
            </tr>
          </thead>
          <tbody>
            {investments.map(({ fund, amount, timestamp }, i) => (
              <tr key={i} className="odd:bg-gray-50 even:bg-gray-200">
                <td className="p-2 text-lg">{fund}</td>
                <td className="p-2 text-lg">{dayjs(timestamp).format('lll')}</td>
                <td className="p-2 text-lg text-right">{formatCurrency(amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
  );
}
