import { Id } from "../value-object/id";

type CreateProps = {
  birthday: Date;
  name: string;
  specie: string;
  breed: string;
  ownerId: string;
};

type BuildProps = CreateProps & {
  id: string;
};

export class Pet {
  private id: string;
  private birthday: Date;
  private name: string;
  private specie: string;
  private breed: string;
  private ownerId: string;

  private constructor(props: BuildProps) {
    this.id = props.id;
    this.birthday = props.birthday;
    this.breed = props.breed;
    this.name = props.name;
    this.specie = props.specie;
    this.ownerId = props.ownerId;
  }

  static create(props: CreateProps) {
    return new Pet({ id: new Id().getValue(), ...props });
  }

  getName() {
    return this.name;
  }
}