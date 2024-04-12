import dotenv from "dotenv";
dotenv.config();

interface IEnvKeys {
  DATABASE_URL: string;
}

const EnvKeys: IEnvKeys = {
  DATABASE_URL: process.env.DATABASE_URL,
};

export const getEnvKey = (key: keyof IEnvKeys): string => {
  return EnvKeys[key];
};
