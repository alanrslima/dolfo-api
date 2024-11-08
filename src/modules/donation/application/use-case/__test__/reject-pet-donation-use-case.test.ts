import { generatePet } from "../../../domain/entity/__mocks__/pet.mock";
import { Donation } from "../../../domain/entity/donation";
import { NotAllowedToApproveDonationError } from "../../../error/not-allowed-to-approve-donation-error";
import { DonationMemoryRepository } from "../../../infra/repository/memory/donation-memory-repository";
import { RejectPetDonationUseCase } from "../reject-pet-donation-use-case";

it("just the pet onwer should reject the pet donation", async () => {
  const pet = generatePet();
  pet.approve();
  const donation = Donation.init({ pet, recipientId: "987" });
  const donationMemoryRepository = new DonationMemoryRepository([donation]);
  const rejectPetDonationUseCase = new RejectPetDonationUseCase(
    donationMemoryRepository
  );
  const execute = async () =>
    rejectPetDonationUseCase.execute({
      donationId: donation.getId(),
      loggedClientId: "randon_id",
    });
  expect(execute).rejects.toThrow(NotAllowedToApproveDonationError);
});

it("should reject a pet donation", async () => {
  const pet = generatePet();
  pet.approve();
  const donation = Donation.init({ pet, recipientId: "987" });
  const donationMemoryRepository = new DonationMemoryRepository([donation]);
  const rejectPetDonationUseCase = new RejectPetDonationUseCase(
    donationMemoryRepository
  );
  await rejectPetDonationUseCase.execute({
    donationId: donation.getId(),
    loggedClientId: pet.getOwnerId(),
  });
  const updatedDonation = await donationMemoryRepository.getById(
    donation.getId()
  );
  expect(updatedDonation.getStatus()).toEqual("rejected");
});
