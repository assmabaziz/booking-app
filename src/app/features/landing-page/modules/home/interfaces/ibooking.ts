export interface IBooking {
  startDate: Date,
  endDate: Date,
  room: IRoom,
  totalPrice: number,
  user:IUser
}
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
export interface IUser {
  country:string,
  createdAt:Date,
  email:string,
  phoneNumber:number,
  profileImage:string,
  role:string,
  updatedAt:Date,
  userName:string,
  verified:boolean,
  _id: string
}
export interface IFacility {
  name: string;
  _id: string;
}