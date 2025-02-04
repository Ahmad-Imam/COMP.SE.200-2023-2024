import chai from "chai";
import add from "../src/add.js";

const expect = chai.expect;

describe("add function", () => {
  it("adds 6 and 4 to equal 10", () => {
    expect(add(6, 4)).to.equal(10);
  });
});

describe("add function 2", () => {
  it("adds 2 and 4 to equal 6", () => {
    expect(add(2, 4)).to.equal(6);
  });
});
