import { Donation } from "../../../domain/entity/donation";

export interface DonationRepository {
  create(donation: Donation): Promise<void>;
  getById(id: string): Promise<Donation>;
  update(donation: Donation): Promise<void>;
}
