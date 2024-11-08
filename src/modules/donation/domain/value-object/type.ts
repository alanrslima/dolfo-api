export class Type<T extends string> {
  private validValues: T[];
  private value: string;

  constructor(input: T, validValues: T[]) {
    this.validValues = validValues;
    this.validate(input);
    this.value = input;
  }

  private validate(value: any): void {
    const includes = this.validValues.includes(value);
    if (!includes) {
      throw new Error("Invalid value");
    }
  }

  getValue(): T {
    return this.value as T;
  }
}
