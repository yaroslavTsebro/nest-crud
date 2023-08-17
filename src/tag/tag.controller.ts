import {
  Patch,
  Post,
  Delete,
  Get,
  Controller,
  Param,
  Body,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag } from './tag.entity';
import { TagDto } from './dto/tag.dto';
import { Logger } from '@nestjs/common';

@Controller('tag')
export class TagController {
  private readonly logger = new Logger(TagController.name);
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<Tag[]> {
    try {
      return await this.tagService.findAll();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Tag> {
    try {
      this.logger.log('id', id);
      return await this.tagService.findById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<number> {
    try {
      this.logger.log('id', id);
      return await this.tagService.deleteById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() dto: TagDto): Promise<Tag> {
    try {
      this.logger.log('id', id);
      this.logger.log('dto', dto);
      return await this.tagService.updateById(id, dto);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Post()
  async create(@Body() dto: TagDto): Promise<Tag> {
    try {
      this.logger.log('dto', dto);
      return await this.tagService.create(dto);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
