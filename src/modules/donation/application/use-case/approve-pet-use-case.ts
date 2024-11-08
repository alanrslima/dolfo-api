import { UseCase } from "../../../common";
import { PetRepository } from "../contract/repository/pet-repository";

export class ApprovePetUseCase implements UseCase<Input, Output> {
  constructor(private readonly petRepository: PetRepository) {}

  async execute(input: Input): Promise<void> {
    const pet = await this.petRepository.getById(input.petId);
    pet.approve();
    await this.petRepository.update(pet);
  }
}

type Input = {
  petId: string;
};

type Output = void;
