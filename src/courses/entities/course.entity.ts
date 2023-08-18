import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/users/entities/user.entity';


@Entity('Courses')
export class Course {
  @PrimaryGeneratedColumn()
  CourseID: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  CourseName: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Instructor: string;

  @Column({ type: 'text', nullable: true })
  Description: string;

  @ManyToMany(() => User, user => user.courses)
  @JoinTable()
  enrollments: User[];
}
