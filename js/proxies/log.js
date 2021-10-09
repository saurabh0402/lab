function logKeyAccess(obj) {
  return new Proxy(obj, {
    get: (target, key) => {
      console.log(`Key ${key} was accessed.`);
      return Reflect.get(target, key);
    },
    set: (target, key, value) => {
      console.log(`Key ${key} was set to ${value}`);
      return Reflect.set(target, key, value);
    },
  });
}

(() => {
  const user = {
    name: 'Someone',
    age: 152,
  };

  const userThatLogs = logKeyAccess(user);

  console.log(userThatLogs.name);
  userThatLogs.age = 15;
})();
