import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosService } from './photoAPI/photos.service';
import { Photo } from './photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotosService],
})
export class PhotosModule {}