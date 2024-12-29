export interface IAds {
  _id: string;
  isActive: boolean;
  room: Room;
  createdBy: CreatedBy;
  createdAt: string;
  updatedAt: string;
}

export interface Room {
  _id: string;
  roomNumber: string;
  price: number;
  capacity: number;
  discount: number;
  facilities: string[];
  createdBy: string;
  images: any[];
  createdAt: string;
  updatedAt: string;
}

export interface CreatedBy {
  _id: string;
  userName: string;
}
