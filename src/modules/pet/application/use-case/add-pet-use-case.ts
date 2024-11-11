import { UseCase } from "../../../common";
import { Pet } from "../../domain/entity/pet";
import { PetRepository } from "../contract/repository/pet-repository";

export class AddPetUseCase implements UseCase<Input, Output> {
  constructor(private readonly petRepository: PetRepository) {}

  async execute(input: Input): Promise<void> {
    const pet = Pet.create(input);
    await this.petRepository.create(pet);
  }
}

type Input = {
  birthday: Date;
  name: string;
  specie: string;
  breed: string;
  guardianId: string;
};

type Output = void;
