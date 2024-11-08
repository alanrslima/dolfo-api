import { z } from "zod";

export class Dating {
  private value: Date;

  constructor(input: string | Date) {
    this.value = this.validate(input);
  }

  getValue() {
    return this.value;
  }

  private validate(value: any) {
    if (isNaN(new Date(value) as any)) {
      throw new Error("Invalid date");
    }
    return new Date(value);
  }
}
