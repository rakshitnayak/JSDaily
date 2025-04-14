/*

Interface Segregation Principle (ISP)
- Don't force modules/functions/components to implement things they don't use.
- Prefer smaller, focused interfaces.
*/

// Bad
function createWorker() {
  return {
    work: () => console.log("Working"),
    eat: () => console.log("Eating"),
  };
}

const robot = createWorker();
robot.eat(); // Hmm? Why do robots eat?

// Good
function createHuman() {
  return {
    work: () => console.log("Working"),
    eat: () => console.log("Eating"),
  };
}

function createRobot() {
  return {
    work: () => console.log("Working"),
  };
}

const human = createHuman();
const robots = createRobot();

human.eat(); // OK
robots.work(); // OK
