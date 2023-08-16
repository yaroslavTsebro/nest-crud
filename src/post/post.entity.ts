import { BaseEntity } from 'src/shared/entity/base.entity';
import { Tag } from 'src/tag/tag.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @Column({ unique: true, length: 50, type: 'varchar', nullable: false })
  title: string;
  @Column({ length: 500, type: 'varchar', nullable: false })
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany((type) => Tag, (tag) => tag.posts, { eager: false })
  @JoinTable()
  tags: Tag[];
}
