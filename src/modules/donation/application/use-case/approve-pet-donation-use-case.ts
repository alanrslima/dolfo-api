import { UseCase } from "../../../common";
import { NotAllowedToApproveDonationError } from "../../error/not-allowed-to-approve-donation-error";
import { DonationRepository } from "../contract/repository/donation-repository";

export class ApprovePetDonationUseCase implements UseCase<Input, Output> {
  constructor(private readonly donationRepository: DonationRepository) {}

  async execute(input: Input): Promise<void> {
    const donation = await this.donationRepository.getById(input.donationId);
    if (input.loggedClientId !== donation.getDonorId())
      throw new NotAllowedToApproveDonationError();
    donation.approve();
    await this.donationRepository.update(donation);
  }
}

type Input = {
  donationId: string;
  loggedClientId: string;
};

type Output = void;
