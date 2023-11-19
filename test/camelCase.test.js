import chai from "chai";
const expect = chai.expect;
import chaiHttp from "chai-http";
chai.use(chaiHttp);

import camelCase from "../src/camelCase.js";

describe("camelCase function", () => {
  it("should convert a simple string to camelCase", () => {
    const result = camelCase("hello world");
    expect(result).to.equal("helloWorld");
  });
  //   it("should convert a simple string to camelCase", () => {
  //     const result = camelCase("hello");
  //     expect(result).to.equal("hello");
  //   });
  //   it("should convert a simple string to camelCase", () => {
  //     const result = camelCase("Foo Bar");
  //     expect(result).to.equal("fooBar");
  //   });
  //   it("should convert a simple string to camelCase", () => {
  //     const result = camelCase("--foo-bar-");
  //     expect(result).to.equal("fooBar");
  //   });
});
