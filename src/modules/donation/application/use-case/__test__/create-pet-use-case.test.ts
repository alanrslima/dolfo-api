import { PetMemoryRepository } from "../../../infra/repository/memory/pet-memory-repository";
import { CreatePetUseCase } from "../create-pet-use-case";

it("should create a new pet", async () => {
  const petMemoryRepository = new PetMemoryRepository();
  const createPetUseCase = new CreatePetUseCase(petMemoryRepository);
  await createPetUseCase.execute({
    birthday: "2023-06-12",
    breed: "golden",
    description: "description",
    name: "Jack",
    price: 300,
    specie: "dog",
  });
  expect(petMemoryRepository.getData()).toHaveLength(1);
  const createdPet = petMemoryRepository.getData()[0];
  expect(createdPet.getId()).toBeDefined();
  expect(createdPet.getPrice()).toEqual(300);
  expect(createdPet.getStatus()).toEqual("pending");
});
