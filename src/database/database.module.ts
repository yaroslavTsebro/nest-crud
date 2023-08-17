import { Module, Global, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/post/post.entity';
import { Tag } from 'src/tag/tag.entity';

function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'host.docker.internal',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASS || 'zsbldqpk56',
    database: process.env.DB_NAME || 'post',
    entities: [Post, Tag],
    synchronize: true,
  });
}

@Global()
@Module({
  imports: [DatabaseOrmModule()],
})
export class DatabaseModule {}
