// test.js

import { assert as _assert } from "chai";
const assert = _assert;
import add from "../src/add.js";

describe("Add function", () => {
  it("should return the sum of two numbers", () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;

    // Act
    const result = add(num1, num2);

    // Assert
    assert.equal(result, 5);
  });

  it("should handle negative numbers correctly", () => {
    // Arrange
    const num1 = -2;
    const num2 = 3;

    // Act
    const result = add(num1, num2);

    // Assert
    assert.equal(result, 1);
  });

  it("should handle zero correctly", () => {
    // Arrange
    const num1 = 0;
    const num2 = 3;

    // Act
    const result = add(num1, num2);

    // Assert
    assert.equal(result, 3);
  });
});
