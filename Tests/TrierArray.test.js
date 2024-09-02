test('Trier un array croissant', () => {
  const TrierArray = require('../Main/opti');
  const arrayATrier = [1, 5, 2, 9, 4, 3, 7, 8, 6];
  expect(TrierArray(arrayATrier)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
});

