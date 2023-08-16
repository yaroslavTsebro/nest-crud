import { In, Repository } from 'typeorm';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PostUpdateDto } from './dto/post-update.dto';
import { Tag } from 'src/tag/tag.entity';
import { PostCreateDto } from './dto/post-create.dto';

export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findById(id: number): Promise<Post> {
    const post = await this.postRepository.findOneBy({
      id,
    });

    if (!post) {
      throw new Error(`Post with ID ${id} not found`);
    }

    post.tags = await post.tags;
    return post;
  }

  async deleteById(id: number): Promise<number> {
    const deleteResults = await this.postRepository.delete({ id: id });
    if (!deleteResults.affected || deleteResults.affected === 0) {
      throw new Error(`Post with ID ${id} not found`);
    }
    return deleteResults.affected;
  }

  async updateById(id: number, dto: PostUpdateDto): Promise<Post> {
    const post = await this.postRepository.findOneBy({ id });

    if (!post) {
      throw new Error(`Post with ID ${id} not found`);
    }

    if (dto.title) {
      post.title = dto.title;
    }
    if (dto.text) {
      post.text = dto.text;
    }
    if (dto.tags) {
      post.tags = await this.tagRepository.findBy({ id: In(dto.tags) });
    }

    return await this.postRepository.save(post);
  }

  async create(dto: PostCreateDto): Promise<Post> {
    const post = new Post();

    post.title = dto.title;
    post.text = dto.text;
    if (dto.tags && dto.tags.length > 0) {
      post.tags = await this.tagRepository.findBy({ id: In(dto.tags) });
    }

    return await this.postRepository.save(post);
  }
}
