export interface IusersAdmin {
  _id: string;
  userName: string;
  email: string;
  phoneNumber: number;
  country: string;
  role: string;
  profileImage: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IChangePassword {
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
  }
