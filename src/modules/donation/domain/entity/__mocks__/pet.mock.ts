import { Pet } from "../pet";

export function generatePet(): Pet {
  return Pet.create({
    birthday: "2024-01-01",
    breed: "golden",
    description: "amazong description",
    name: "Jack",
    ownerId: "123",
    price: 300,
    specie: "dog",
  });
}
