import { InvalidTextError } from "../../../error/invalid-text-error";
import { Text } from "../text";

it("should create a text", () => {
  const name = new Text("name");
  expect(name.getValue()).toEqual("name");
});

it("should create an invalid name", () => {
  const execute = () => new Text(123 as any);
  expect(execute).toThrow(InvalidTextError);
});
