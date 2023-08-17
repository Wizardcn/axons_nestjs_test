import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: Partial<User>): Promise<User> {
    console.log(user)
    return this.usersRepository.save(user);
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

  async update(UserID: number, user: Partial<User>) {
    await this.usersRepository.update(UserID, user)
  }
}
