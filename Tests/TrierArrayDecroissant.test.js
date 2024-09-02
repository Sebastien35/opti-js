test('Trier un array décroissant', () => {
    const TrierArrayDecroissant = require('../Main/opti');
    const arrayATrier = [1, 5, 2, 9, 4, 3, 7, 8, 6];
    expect(TrierArrayDecroissant(arrayATrier)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    
    });

    