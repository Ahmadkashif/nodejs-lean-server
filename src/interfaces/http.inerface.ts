import { Request, Response } from 'express';
import { User } from '@/interfaces/models/users.interface';
import { Member } from '@/interfaces/models/member.interface';
import { Role } from '@/interfaces/models/roles.interface';

export interface ApiRequest extends Request {
  user: User;
  member: Member;
  role: Role;
}

export interface ApiResponse extends Response {
  message: string;
  data: object;
}
