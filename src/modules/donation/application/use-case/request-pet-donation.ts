import { UseCase } from "../../../common";
import { Donation } from "../../domain/entity/donation";
import { DonationRepository } from "../contract/repository/donation-repository";
import { PetRepository } from "../contract/repository/pet-repository";

export class RequestPetDonation implements UseCase<Input, Output> {
  constructor(
    private readonly petRepository: PetRepository,
    private readonly donationRepository: DonationRepository
  ) {}

  async execute(input: Input): Promise<void> {
    const pet = await this.petRepository.getById(input.petId);
    const donation = Donation.init({ pet, recipientId: input.loggedClientId });
    await this.donationRepository.create(donation);
  }
}

type Input = {
  petId: string;
  loggedClientId: string;
};

type Output = void;
