import { PetMemoryRepository } from "../../../infra/repository/memory/pet-memory-repository";
import { CreatePetUseCase } from "../create-pet-use-case";

it("should create a new pet", async () => {
  const petMemoryRepository = new PetMemoryRepository();
  const createPetUseCase = new CreatePetUseCase(petMemoryRepository);
  await createPetUseCase.execute({
    birthday: new Date(2020, 10, 10),
    breed: "golden",
    name: "Spaike",
    guardianId: "123",
    specie: "Dog",
  });
  expect(petMemoryRepository.getData()).toHaveLength(1);
  const createdPet = petMemoryRepository.getData()[0];
  expect(createdPet.getName()).toEqual("Spaike");
});
