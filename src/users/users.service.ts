import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    const user: User = new User();
    user.created_at = new Date();
    user.name = CreateUserDto.name;
    bcrypt.hashSync(CreateUserDto.password, 10);
    if (createUserDto instanceof User) {
      this.users.push(createUserDto);
    }
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.filter((user) => user.id == id);

    return user;
  }
  findoneByEmail(email: string) {
    const user = this.users.filter((user) => user.email == email);

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
