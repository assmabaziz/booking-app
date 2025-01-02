export interface IApiRespose<T> {
  success: boolean;
  message: string;
  data: {
    [key: string]: T[] | object; // A dynamic key for arrays (like booking, ads, or rooms) and totalCount
    totalCount: number | any;
  };
}

export interface IadsAddEdit {
  isActive: boolean;
  room: string;
  createdBy: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IadsDelete {
  acknowledged: boolean;
  deletedCount: number;
}

export interface IroomAdd {
  roomNumber: string;
  price: number;
  capacity: number;
  discount: number;
  facilities: string[];
  createdBy: string;
  images: any[];
  _id: string;
  createdAt: string;
  updatedAt: string;
}
