const calculator = {
  value: 0,

  add(number) {
    this.value += number;
    return this; // Return the object itself for chaining
  },

  subtract(number) {
    this.value -= number;
    return this; // Return the object itself for chaining
  },

  multiply(number) {
    this.value *= number;
    return this; // Return the object itself for chaining
  },

  divide(number) {
    if (number !== 0) {
      this.value /= number;
    } else {
      console.error("Cannot divide by zero!");
    }
    return this; // Return the object itself for chaining
  },

  getResult() {
    return this.value; // Return the final result
  }
};

// Example usage:
const result = calculator
  .add(10)        // 0 + 10 = 10
  .subtract(2)    // 10 - 2 = 8
  .multiply(5)    // 8 * 5 = 40
  .divide(4)      // 40 / 4 = 10
  .getResult();   // Get the final result

console.log(result); // Output: 10
