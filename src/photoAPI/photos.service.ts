import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class PhotosService {
  async getCatsImages(): Promise<AxiosResponse<string[], any>> {
    const url = 'https://random.dog/doggos';
    return axios.get<string[]>(url);
    
  }
}
