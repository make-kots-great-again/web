export interface IGroup {
  groupId?: any;
  groupName: string;
  groupDescription?: string;
  roleInThisGroup?: object;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IgroupMember {
  username: string;
  email: string;
}

export class Group implements IGroup {
  constructor(
    public groupName: string,
    public groupDescription: string,
    public groupId?: string,
    public roleInThisGroup?: object,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {
    this.groupId = groupId ? groupId : null;
    this.groupName = groupName ? groupName : null;
    this.groupDescription = groupDescription ? groupDescription : null;
    this.roleInThisGroup = roleInThisGroup ? roleInThisGroup : null;
    this.createdAt = createdAt ? createdAt : null;
    this.updatedAt = updatedAt ? updatedAt : null;
  }
}

export class groupMember implements IgroupMember {
  constructor(
    public username: string,
    public email: string
  ) {
    this.username = username ? username : null;
    this.email = email ? email : null;
  }
}
