import { Role } from '../enums/role.enum';

export class CreateUserDto {
  id: number;
  name: string;
  password: string;
  email: string;
  isActive: boolean;
  isVerifed: boolean;
  created_at: Date;
  roles: Role[];
}
