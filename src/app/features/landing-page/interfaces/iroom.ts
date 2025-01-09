export interface IRoom {
  capacity: number;
  createdAt: string;
  createdBy: string;
  discount: number;
  facilities: IFacility;
  images: string[];
  isBooked: boolean;
  price: number;
  roomNumber: string;
  updatedAt: string;
  _id: string;
}

export interface IFacility {
  name: string;
  _id: string;
}
export interface IParamsRoom {
  page ?: number,
    size ?: number,
    startDate ?: Date | null,
    endDate ?: Date | null ,
}

export interface Icomment {
  roomId : string,
  comment : string,
}
export interface IRoomCommented {
  roomNumber : string,
  _id : string,
}
export interface IUser {
  profileImage : string,
  userName : string,
  _id: string
}
export interface IRoomComment {
  comment:string
  createdAt:string
  updatedAt:string
  _id:string
  room:IRoomCommented
  user :IUser,
}