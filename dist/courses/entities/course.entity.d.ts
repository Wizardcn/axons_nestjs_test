import { User } from 'src/users/entities/user.entity';
export declare class Course {
    CourseID: number;
    CourseName: string;
    Instructor: string;
    Description: string;
    enrollments: User[];
}
