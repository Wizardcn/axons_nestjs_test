import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column({ length: 50, nullable: false })
  Username: string;

  @Column({ length: 100, nullable: false })
  Email: string;

  @Column({ type: 'date', nullable: true })
  DateOfBirth: Date;

  @ManyToMany
}
