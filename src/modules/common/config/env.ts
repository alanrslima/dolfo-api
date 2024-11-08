import * as dotenv from "dotenv";
dotenv.config();

const envVariables = {
  NODE_ENV:
    "Ambiente da aplicação. Valores suportados = development | staging | production",
  PORT: "Porta que a api irá utilizar",
  JWT_SECRET: "Chave privada para os tokens JWT",
  MYSQL_USER: "",
  MYSQL_DATABASE: "",
  MYSQL_PASSWORD: "",
  MYSQL_PORT: "",
  MYSQL_HOST: "",
};

const envsMapper: { [key in keyof typeof envVariables]: any } = {} as any;

Object.keys(envVariables).map((key) => {
  if (!process.env[key]?.length) {
    throw new Error(`Expected env variable "${key}" not founded`);
  }
  envsMapper[key as keyof typeof envVariables] = process.env[key]!;
});

export const env = Object.freeze(envsMapper);
