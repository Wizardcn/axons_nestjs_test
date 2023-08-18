import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  async onModuleInit() {
    await this.createMockCourses();
  }
  private async createMockCourses(): Promise<void> {
    const existingCourseCount = await this.coursesRepository.count();
    
    if (existingCourseCount === 0) {
      const mockUsers: Partial<Course>[] = [
        {
          CourseID: 101,
          CourseName: "Math Fundamentals",
          Instructor: "Prof. Smith",
          Description: "Basic math concepts",
        },
        {
          CourseID: 102,
          CourseName: "History 101",
          Instructor: "Prof. Johnson",
          Description: "Introduction to history",
        },
        {
          CourseID: 103,
          CourseName: "Programming 101",
          Instructor: "Prof. Art",
          Description: "Introduction to programming",
        },
      ];
  
      for (const mockUser of mockUsers) {
        await this.coursesRepository.save(mockUser);
      }
    }
  }

  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
