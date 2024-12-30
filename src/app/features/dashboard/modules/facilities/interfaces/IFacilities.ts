import { CreatedBy } from "../../ads/interfaces/iads";

export interface IFacilities {
  _id: number,
  name:string ,
  createdBy: CreatedBy;
  createdAt: string,
  updatedAt:string
}
