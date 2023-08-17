import { Tag } from 'src/tag/tag.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ unique: true, length: 50, type: 'varchar', nullable: false })
  title: string;
  @Column({ length: 500, type: 'varchar', nullable: false })
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany((type) => Tag, (tag) => tag.posts, { eager: false })
  @JoinTable()
  tags: Tag[];
}
