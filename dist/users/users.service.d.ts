import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    onModuleInit(): Promise<void>;
    private createMockUsers;
    create(user: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(UserID: number): Promise<User | null>;
    remove(UserID: number): Promise<void>;
    update(UserID: number, user: Partial<User>): Promise<void>;
}
