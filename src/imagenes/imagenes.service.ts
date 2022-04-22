import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { CreateImageneDto } from './dto/create-imagene.dto';
import { UpdateImageneDto } from './dto/update-imagene.dto';

interface ResponseImages {
  data: any[];
}

@Injectable()
export class ImagenesService {
  private _url: string = 'https://api.thecatapi.com/v1';
  // private _url1: string =
  //   'https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc';
  // private _url2: string = 'https://api.thecatapi.com/v1/favourites';
  // private _url3: string = 'https://api.thecatapi.com/v1/favourites';
  constructor(private httpService: HttpService) {}

  findAll(): Observable<any> {
    const page = this.generateRandomFloatInRange(1, 200);
    return this.httpService
      .get<ResponseImages>(
        `${this._url}/images/search?limit=10&page=${page}&order=Desc`,
        {
          headers: {
            'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
          },
        },
      )
      .pipe(map((response) => response.data));
  }

  markFavorites(id: string): Observable<any> {
    return this.httpService
      .post<ResponseImages>(
        `${this._url}/favourites`,
        {
          image_id: id,
        },
        {
          headers: {
            'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
          },
        },
      )
      .pipe(map((response) => response.data));
  }

  findFavorites(): Observable<any> {
    return this.httpService
      .get<ResponseImages>(`${this._url}/favourites`, {
        headers: {
          'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
        },
      })
      .pipe(map((response) => response.data));
  }

  generateRandomFloatInRange(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
  }
}
