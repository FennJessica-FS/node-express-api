const { uppercase, lowercase } = require("./string");

describe("testing the string module", () => {
  test("should uppercase a string during input", () => {
    expect(uppercase("Jess")).toBe("JESS");
  });

  test("should lowercase a string during input", () => {
    expect(lowercase("Full Sail")).toBe("full sail");
  });
});
