import { Dating } from "../value-object/dating";
import { Price } from "../value-object/price";
import { Text } from "../value-object/text";
import { Type } from "../value-object/type";
import { Pet } from "./pet";
import { randomUUID } from "node:crypto";

type CreateProps = {
  pet: Pet;
  recipientId: string;
};

type BuildProps = {
  id: string;
  date: Date;
  price: number;
  petId: string;
  status: DonationStatus;
  donorId: string;
  recipientId: string;
};

type DonationStatus = "approved" | "pending" | "rejected";
const donationStatusArray: DonationStatus[] = [
  "approved",
  "pending",
  "rejected",
];

export class Donation {
  private id: Text;
  private recipientId: Text;
  private donorId: Text;
  private date: Dating;
  private price: Price;
  private petId: Text;
  private status: Type<DonationStatus>;

  private constructor(props: BuildProps) {
    this.id = new Text(props.id);
    this.date = new Dating(props.date);
    this.petId = new Text(props.petId);
    this.price = new Price(props.price);
    this.status = new Type<DonationStatus>(props.status, donationStatusArray);
    this.recipientId = new Text(props.recipientId, "recipientId");
    this.donorId = new Text(props.donorId, "donorId");
  }

  static init(props: CreateProps) {
    if (!props.pet.isAvailable()) {
      throw new Error("O pet não pode ser adotado");
    }
    return new Donation({
      id: randomUUID(),
      date: new Date(),
      price: props.pet.getPrice(),
      petId: props.pet.getId(),
      status: "pending",
      donorId: props.pet.getOwnerId(),
      recipientId: props.recipientId,
    });
  }

  getId(): string {
    return this.id.getValue();
  }

  getDonorId(): string {
    return this.donorId.getValue();
  }

  getStatus(): string {
    return this.status.getValue();
  }

  approve(): void {
    this.status = new Type("approved", donationStatusArray);
  }

  reject(): void {
    this.status = new Type("rejected", donationStatusArray);
  }
}
