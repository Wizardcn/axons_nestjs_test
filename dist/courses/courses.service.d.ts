import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesService {
    private coursesRepository;
    constructor(coursesRepository: Repository<Course>);
    onModuleInit(): Promise<void>;
    private createMockCourses;
    create(createCourseDto: CreateCourseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCourseDto: UpdateCourseDto): string;
    remove(id: number): string;
}
