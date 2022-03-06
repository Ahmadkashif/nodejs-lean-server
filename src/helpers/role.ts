import { RoleCode } from '../models/model/Role';
import { RoleRequest } from 'app-request';
import { Response, NextFunction } from 'express';

export default (roleCode: RoleCode) => (req: RoleRequest, res: Response, next: NextFunction) => {
  req.currentRoleCode = roleCode;
  next();
};
