export interface IUser {
  userId?: any;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User implements IUser {
  constructor(
    public firstName: string,
    public lastName: string,
    public username: string,
    public email: string,
    public password: string,
    public userId?: any,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {
    this.userId = userId ? userId : null;
    this.firstName = firstName ? firstName : null;
    this.lastName = lastName ? lastName : null;
    this.username = username ? username : null;
    this.email = email ? email : null;
    this.password = password ? password : null;
    this.createdAt = createdAt ? createdAt : null;
    this.updatedAt = updatedAt ? updatedAt : null;
  }
}
