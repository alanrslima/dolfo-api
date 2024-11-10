import { randomUUID } from "node:crypto";
import { Email } from "../value-object/email";
import { Password } from "../value-object/password";

type CreateProps = {
  name: string;
  email: string;
  rawPassword?: string;
};

type BuildProps = Omit<CreateProps, "rawPassword"> & {
  id: string;
  hashPassword?: string;
  salt?: string;
};

type ConstructorProps = Omit<BuildProps, "password" | "salt"> & {
  password?: Password;
};

export class User {
  private id: string;
  private name: string;
  private email: Email;
  private password?: Password;
  private phone?: string;

  private constructor(props: ConstructorProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = new Email(props.email);
    this.password = props.password;
  }

  static create(props: CreateProps) {
    return new User({
      ...props,
      id: randomUUID(),
      password: props.rawPassword
        ? Password.create({ rawPassword: props.rawPassword })
        : undefined,
    });
  }

  static build(props: BuildProps) {
    return new User({
      ...props,
      password:
        props.hashPassword && props.salt
          ? Password.build({ hash: props.hashPassword, salt: props.salt })
          : undefined,
    });
  }

  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email.getValue();
  }

  getName(): string {
    return this.name;
  }

  getPasswordHash() {
    return this.password?.getHash();
  }

  getPasswordSalt() {
    return this.password?.getSalt();
  }

  isPasswordValid(password: string) {
    return this.password?.valid(password);
  }
}
