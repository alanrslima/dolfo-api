import { Donation } from "../donation";
import { Pet } from "../pet";

it("should not init a donation process if the peg is not available", () => {
  const pet = Pet.create({
    birthday: "2024-01-01",
    breed: "beagle",
    description: "amazing dog",
    name: "Plutus",
    price: 2000,
    specie: "dog",
    ownerId: "123",
  });
  const execute = () => Donation.init({ pet, recipientId: "123" });
  expect(execute).toThrow();
});

it("should init a donation process", () => {
  const pet = Pet.create({
    birthday: "2024-01-01",
    breed: "beagle",
    description: "amazing dog",
    name: "Plutus",
    price: 2000,
    specie: "dog",
    ownerId: "123",
  });
  pet.approve();
  const donation = Donation.init({ pet, recipientId: "123" });
  expect(donation);
});
