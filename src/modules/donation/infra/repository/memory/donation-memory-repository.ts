import { DonationRepository } from "../../../application/contract/repository/donation-repository";
import { Donation } from "../../../domain/entity/donation";
import { DonationNotFoundError } from "../../../error/donation-not-found-error";

export class DonationMemoryRepository implements DonationRepository {
  private data: Donation[];

  constructor(mock?: Donation[]) {
    this.data = mock || [];
  }

  async getById(id: string): Promise<Donation> {
    const donation = this.data.find((donation) => donation.getId() === id);
    if (!donation) throw new DonationNotFoundError();
    return donation;
  }

  async update(donation: Donation): Promise<void> {
    this.data = this.data.map((item) =>
      item.getId() === donation.getId() ? donation : item
    );
  }

  async create(donation: Donation): Promise<void> {
    this.data.push(donation);
  }

  getData() {
    return this.data;
  }
}
