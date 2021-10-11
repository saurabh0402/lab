/*
  Not the most useful example but this shows how we can use Symbol.toPrimitive to 
  allow using objects as key to objects 🥳
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  [Symbol.toPrimitive]() {
    return `__user__${this.name}`;
  }
}

(() => {
  const u1 = new User('someone', 123);

  const obj = {
    [u1]: true,
  };

  console.log(obj);
})();
