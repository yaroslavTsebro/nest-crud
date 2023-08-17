import {
  Body,
  Controller,
  Get,
  Delete,
  Post,
  Patch,
  Logger,
  Param,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostUpdateDto } from './dto/post-update.dto';
import { Post as PostEntity } from './post.entity';
import { PostCreateDto } from './dto/post-create.dto';

@Controller('post')
export class PostController {
  private readonly logger = new Logger(PostController.name);
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    try {
      return await this.postService.findAll();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<PostEntity> {
    try {
      this.logger.log('id', id);
      return await this.postService.findById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<number> {
    try {
      this.logger.log('id', id);
      return await this.postService.deleteById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Patch(':id')
  async updateById(
    @Param('id') id: number,
    @Body() dto: PostUpdateDto,
  ): Promise<PostEntity> {
    try {
      this.logger.log('id', id);
      this.logger.log('dto', dto);
      return await this.postService.updateById(id, dto);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Post()
  async create(@Body() dto: PostCreateDto): Promise<PostEntity> {
    try {
      this.logger.log('dto', dto);
      return await this.postService.create(dto);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
