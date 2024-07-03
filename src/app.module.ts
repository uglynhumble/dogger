import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { PhotosService } from './photoAPI/photos.service';
import { Photo } from './photo.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5555,
    password: '13082004',
    username: 'platon',
    entities: [Photo],
    database: 'platon',
    synchronize: true,
    logging: true,
  }),
  ],
  controllers: [AppController],
  providers: [AppService, PhotosService],
})
export class AppModule {}
