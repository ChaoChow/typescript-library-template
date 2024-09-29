import { describe } from "@jest/globals";
import { helloPerson } from "src/helloPerson";

describe('Tests hello person function', () => {
  it('returns "hello {firstName}, {lastName}" based on arguments passed in.', () => {
    expect(helloPerson('Bob', 'Smith', 37)).toBe("Hello Bob Smith!");
  });
});
