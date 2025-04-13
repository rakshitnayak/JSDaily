/*

Open/Closed Principle
- Code should be open to extension, but closed to modification.
- Add new features without touching existing logic.

*/

// Bad
function getDiscount(type) {
  if (type === "silver") return 0.1;
  if (type === "gold") return 0.2;
  return 0;
}

// good
const discountStrategies = {
  regular: (price) => price,
  silver: (price) => price * 0.9,
  gold: (price) => price * 0.8,
};

function applyDiscount(price, strategy) {
  return strategy(price);
}

// Usage
const price = 100;
const discounted = applyDiscount(price, discountStrategies.silver);
