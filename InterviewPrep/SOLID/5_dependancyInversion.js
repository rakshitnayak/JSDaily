/*
 Dependency Inversion Principle (DIP)
 - High-level modules (business logic) should not depend on low-level modules (e.g. localStorage, DB).
 - Both should depend on abstractions.
*/

//Bad
function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// Good
function createUserService(storage) {
  return {
    saveUser: (user) => storage.save("user", JSON.stringify(user)),
  };
}

const localStorageAdapter = {
  save: (key, value) => localStorage.setItem(key, value),
};

const service = createUserService(localStorageAdapter);
service.saveUser({ name: "Alice" });

// You can now easily swap storage (e.g., use memory, file, DB).
