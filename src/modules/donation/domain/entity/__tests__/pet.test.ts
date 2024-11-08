import { Pet } from "../pet";

it("should create a pet", () => {
  const pet = Pet.create({
    birthday: "2024-12-12",
    breed: "golden",
    description: "test",
    name: "Rex",
    price: 300,
    specie: "dog",
    ownerId: "123",
  });
  expect(pet.getId()).toBeDefined();
  expect(pet.getPrice()).toEqual(300);
  expect(pet.getStatus()).toEqual("pending");
});

it("should create and approve pet", () => {
  const pet = Pet.create({
    birthday: "2024-12-12",
    breed: "golden",
    description: "test",
    name: "Rex",
    price: 300,
    specie: "dog",
    ownerId: "123",
  });
  pet.approve();
  expect(pet.getId()).toBeDefined();
  expect(pet.getPrice()).toEqual(300);
  expect(pet.getStatus()).toEqual("available");
});
