import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clubs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  club_name: string;

  @Column()
  school: string;

  @Column({default: 'N/A'})
  info: string;

  @Column({default: () => 'NOW()'})
  created_date: Date;

  @Column({nullable: true})
  deleted_date: Date;
}