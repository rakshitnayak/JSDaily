/*
Single Responsibility Principle (SRP)

Concept:
- Every function/module/component should do one thing only.
- If it changes, it should be for one reason only 
*/

// Bad
function handleUser(user) {
  // Validate
  if (!user.email.includes("@")) throw new Error("Invalid email");

  // Save
  localStorage.setItem("user", JSON.stringify(user));

  // Notify
  console.log("Email sent to", user.email);
}

// Good (split responsibilities):
function validateUser(user) {
  if (!user.email.includes("@")) throw new Error("Invalid email");
}

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function notifyUser(user) {
  console.log("Email sent to", user.email);
}

function handleUser(user) {
  validateUser(user);
  saveUser(user);
  notifyUser(user);
}
