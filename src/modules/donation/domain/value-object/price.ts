import { z } from "zod";

export class Price {
  private value: number;

  constructor(input: number) {
    const schema = z
      .number({ required_error: "Price is required" })
      .nonnegative();
    this.value = input;
  }

  getValue() {
    return this.value;
  }
}
