import { Post } from 'src/post/post.entity';
import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Tag extends BaseEntity {
  @Column({ unique: true, length: 50, type: 'varchar', nullable: false })
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany((type) => Post, (post) => post.tags)
  posts: Post[];
}
