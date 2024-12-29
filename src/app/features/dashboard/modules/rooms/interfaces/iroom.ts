export interface IRoom {
  _id: string,
  roomNumber: string,
  images: string,
  price: number,
  capacity: number,
  discount: number,
  facilities: IFacilities[],
  createdAt: string,
  updatedAt: string,
}
export interface IFacilities {
  _id: string,
  name: string,
  createdAt:string;
  updatedAt:string;
  createdBy: IRoomsCreater;
}
export interface IRoomsCreater {
  userName:string;
  _id: string,
}

