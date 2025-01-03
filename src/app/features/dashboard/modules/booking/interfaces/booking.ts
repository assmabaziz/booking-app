export interface IBooking {
  _id:number,
  startDate: string,
  endDate: string,
  totalPrice: number,
  user: BookingUsers,
  room: BookingRoom,
  status: string,
  createdAt: string,
  updatedAt: string
}
export interface BookingRoom {
  _id: string;
  roomNumber: string;
}
export interface BookingUsers {
  _id: string;
  userName: string;
}