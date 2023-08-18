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

  async onModuleInit() {
    // Create mock user data when the module is initialized (server startup)
    await this.createMockUsers();
  }
  private async createMockUsers(): Promise<void> {
    const existingUserCount = await this.usersRepository.count();
    
    if (existingUserCount === 0) {
      const mockUsers: Partial<User>[] = [
        {
          Username: 'user1',
          Email: 'user1@example.com',
          DateOfBirth: new Date('1990-01-01'),
        },
        {
          Username: 'user2',
          Email: 'user2@example.com',
          DateOfBirth: new Date('1995-05-10'),
        },
        {
          Username: 'user3',
          Email: 'user3@example.com',
          DateOfBirth: new Date('1995-05-10'),
        },
      ];
  
      for (const mockUser of mockUsers) {
        await this.usersRepository.save(mockUser);
      }
    }
  }
  
  

  create(user: Partial<User>): Promise<User> {
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

  // async findUserWithCourses(UserID: number): Promise<User | null> {
  //   return this.usersRepository
  //     .createQueryBuilder('user')
  //     .leftJoinAndSelect('user.courses', 'course')
  //     .where('user.UserID = :UserID', { UserID })
  //     .getOne();
  // }
}
