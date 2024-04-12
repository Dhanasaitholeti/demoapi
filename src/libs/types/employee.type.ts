export interface commonType {
  id: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IEmployee extends commonType {
  name: string;
  payable: boolean;
  salaryPerMonth: number;
}
