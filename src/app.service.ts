import { Injectable } from '@nestjs/common';
import { PhotosService } from './photoAPI/photos.service';
@Injectable()
export class AppService {
  constructor(private photosService: PhotosService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async getPhotos(): Promise<string[]> {
    try {
      const response = await this.photosService.getCatsImages()
      const newResponse = response.data.map(correctUrl =>{
          return (`https://random.dog/${correctUrl}`)
      })
      return newResponse
      } catch (error) {
      throw new Error('invalid url')
      }
      
    
  }
}
