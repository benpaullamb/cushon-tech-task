import { invest, getInvestments } from '.';

describe('Utils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('invest', () => {
    test('should store the first investment in an empty array', async () => {
      Date.now = jest.fn().mockReturnValue(2);

      await invest('Test', 1);
      const investments = JSON.parse(localStorage.getItem('investments')!);

      expect(investments).toEqual([{ fund: 'Test', amount: 1, timestamp: 2 }]);
    });

    test('should append the second investment onto the stored array', async () => {
      const oldInvestments = [{ fund: 'Test A', amount: 1, timestamp: 2 }];
      localStorage.setItem('investments', JSON.stringify(oldInvestments));
      Date.now = jest.fn().mockReturnValue(4);

      await invest('Test B', 3);
      const newInvestments = JSON.parse(localStorage.getItem('investments')!);

      expect(newInvestments).toEqual([
        { fund: 'Test A', amount: 1, timestamp: 2 },
        { fund: 'Test B', amount: 3, timestamp: 4 },
      ]);
    });
  });

  describe('getInvestments', () => {
    test('should return an empty array if there are not investments', async () => {
      expect(await getInvestments()).toEqual([]);
    });

    test('should return the stored investments', async () => {
      const investments = [{ fund: 'Test', amount: 1, timestamp: 2 }];
      localStorage.setItem('investments', JSON.stringify(investments));

      expect(await getInvestments()).toEqual(investments);
    });
  });
});
