import { Sequelize } from "sequelize";
import { getEnvKey } from "./manage-env";

export const sequelize = new Sequelize(getEnvKey("DATABASE_URL"));

export const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully..");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
