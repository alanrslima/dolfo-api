import { randomUUID } from "node:crypto";
import { Dating } from "../value-object/dating";
import { Price } from "../value-object/price";
import { Text } from "../value-object/text";
import { Type } from "../value-object/type";

type CreateProps = {
  name: string;
  specie: string;
  breed: string;
  birthday: string;
  description: string;
  price: number;
  ownerId: string;
};

type PetStatus = "available" | "pending" | "rejected";
const petStatusArray: PetStatus[] = ["available", "pending", "rejected"];

type BuildProps = CreateProps & {
  id: string;
  donatedAt?: Date;
  status: PetStatus;
};

export class Pet {
  private id: Text;
  private ownerId: Text;
  private name: Text;
  private specie: Text;
  private breed: Text;
  private birthday: Dating;
  private description: Text;
  private status: Type<PetStatus>;
  private price: Price;

  private constructor(props: BuildProps) {
    this.id = new Text(props.id);
    this.ownerId = new Text(props.ownerId, "ownerId");
    this.name = new Text(props.name, "name");
    this.specie = new Text(props.specie, "specie");
    this.breed = new Text(props.breed, "breed");
    this.birthday = new Dating(props.birthday);
    this.description = new Text(props.description);
    this.status = new Type<PetStatus>(props.status, petStatusArray);
    this.price = new Price(props.price);
  }

  static create(props: CreateProps) {
    return new Pet({ ...props, id: randomUUID(), status: "pending" });
  }

  getId(): string {
    return this.id.getValue();
  }

  getStatus(): PetStatus {
    return this.status.getValue();
  }

  getPrice(): number {
    return this.price.getValue();
  }

  getOwnerId(): string {
    return this.ownerId.getValue();
  }

  isAvailable(): boolean {
    return this.status.getValue() === "available";
  }

  approve() {
    this.status = new Type("available", petStatusArray);
  }

  reject() {
    this.status = new Type("rejected", petStatusArray);
  }

  updatePrice(price: number) {
    this.price = new Price(price);
  }
}
