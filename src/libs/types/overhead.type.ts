import { commonType } from "./employee.type";

export interface IOverhead extends commonType {
  name: string;
  amount: number;
  occurence: "monthly" | "yearly";
}
