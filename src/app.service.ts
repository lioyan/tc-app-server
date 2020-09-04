import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const url = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';
    const { data } = await axios.get(url);
    return `https://cn.bing.com${data.images[0].url}`
  }
  async getHitokoto(): Promise<string> {
    const url = 'https://v1.hitokoto.cn/';
    const { data } = await axios.get(url);
    return data
  }
}
