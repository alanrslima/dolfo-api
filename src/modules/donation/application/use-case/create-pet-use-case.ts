import { UseCase } from "../../../common";
import { Pet } from "../../domain/entity/pet";
import { PetRepository } from "../contract/repository/pet-repository";

export class CreatePetUseCase implements UseCase<Input, Output> {
  constructor(private readonly petRepository: PetRepository) {}

  async execute(input: Input): Promise<void> {
    const pet = Pet.create({
      birthday: input.birthday,
      breed: input.breed,
      description: input.description,
      name: input.name,
      price: input.price,
      specie: input.specie,
      ownerId: "123",
    });
    await this.petRepository.create(pet);
  }
}

export type Input = {
  birthday: string;
  breed: string;
  description: string;
  name: string;
  price: number;
  specie: string;
};

type Output = void;
