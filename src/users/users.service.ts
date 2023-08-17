import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, DeepPartial } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return `This action adds new user to database`;
  }
  
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(UserID: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ UserID });
  }

  async remove(UserID: number): Promise<void> {
    await this.usersRepository.delete(UserID);
  }

  update(UserID: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${UserID} user`;
  }
}
