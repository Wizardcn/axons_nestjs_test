import { Course } from 'src/courses/entities/course.entity';
export declare class User {
    UserID: number;
    Username: string;
    Email: string;
    DateOfBirth: Date;
    courses: Course[];
}
