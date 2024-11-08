import { z } from "zod";
import { InvalidTextError } from "../../error/invalid-text-error";

export class Text {
  private value: string;

  constructor(input: string, field?: string) {
    try {
      const schema = z.string();
      schema.parse(input);
      this.value = input;
    } catch (error) {
      throw new InvalidTextError(field);
    }
  }

  getValue() {
    return this.value;
  }
}
