import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<User[]>;
    findOne(UserID: number): Promise<User | null>;
    remove(UserID: number): Promise<void>;
    update(UserID: number, updateUserDto: UpdateUserDto): string;
}
