// add one jest test

import { square } from "../../helpers";

test("squares a number correctly", () => {
  expect(square(3)).toBe(9);
});
