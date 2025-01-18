export interface IRating {
  _id: string;
  room: IRoom;
  user: IUser;
  rating: number;
  review: string;
  createdAt: string;
  updatedAt: string;
}
export interface IRoom {
  _id: string;
  roomNumber: string;
}

export interface IUser {
  _id: string;
  userName: string;
  profileImage: string;
}