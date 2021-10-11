(() => {
  const key = Symbol('Awesome key');
  const obj = {
    [Symbol.iterator]: function* () {
      yield 1;
      yield 2;
      yield 3;
    },
    [key]: 'Something',
    name: 'Awesome',
    age: 123,
    city: 'World',
  };

  console.log(Reflect.ownKeys(obj));
  // [ 'name', 'age', 'city', Symbol(Symbol.iterator), Symbol(Awesome key) ]

  console.log(Object.keys(obj));
  // [ 'name', 'age', 'city']

  for (x of obj) {
    console.log(x);
  }
})();
