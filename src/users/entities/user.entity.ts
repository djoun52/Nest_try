import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
} from 'typeorm';

import { Role } from '../enums/role.enum';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isVerifed: boolean;

  @Column()
  created_at: Date;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.standard,
  })
  roles: Role[];
}
