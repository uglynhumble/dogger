import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from "./photo.entity";
import { SavePhotoDTO } from "./db.dto";
@Injectable()
export class DbService {
    constructor(
        @InjectRepository(Photo)
        private photoRepository: Repository<Photo>,
      ) {}
      findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
      }
      savePhoto(dto:SavePhotoDTO): Promise<Photo>{
        return this.photoRepository.save(dto);
      }
}