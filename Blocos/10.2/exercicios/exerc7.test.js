const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const aniage = Animals.filter(animalage => animalage.age === age);
      if (aniage.length > 0) {
        return resolve(aniage);
      }
      return reject('Nenhum animal com essa idade!');
    }, 1000);
  })
);

const getAnimal = (age) => {
  return findAnimalByAge(age).then(animal => animal);
};

// ---------------------

describe('Test Find Animal by Age', () => {
  it('find animals with age', () => {
    const animals = [{ name: 'Soneca', age: 2, type: 'Dog' }];
    // return getAnimal(2).then(animals => {
    //   expect(animals).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
    return expect(getAnimal(2)).resolves.toEqual(animals);
  });
  // });

  it('not find animals', () => {
    // return getAnimal(10).catch(error => {
    //   expect(error).toEqual('Nenhum animal com essa idade!');
    // });
    return expect(getAnimal(10)).rejects.toBe('Nenhum animal com essa idade!');
  });
});
