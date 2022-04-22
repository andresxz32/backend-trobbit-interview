import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ResponseFavorite } from 'src/core/common/entities';
import { Imagen } from './entities/imagen.entity';
@Injectable()
export class ImagenesService {
  private _url: string = 'https://api.thecatapi.com/v1';
  constructor(private httpService: HttpService) {}

  findAll(): Observable<Imagen[]> {
    const page = this.generateRandomPage(1, 200);
    return this.httpService
      .get<Imagen[]>(
        `${this._url}/images/search?limit=10&page=${page}&order=Desc`,
        {
          headers: {
            'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
          },
        },
      )
      .pipe(map((response) => response.data));
  }

  markFavorites(id: string): Observable<ResponseFavorite> {
    return this.httpService
      .post<ResponseFavorite>(
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

  findFavorites(): Observable<Imagen[]> {
    return this.httpService
      .get<Imagen[]>(`${this._url}/favourites`, {
        headers: {
          'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
        },
      })
      .pipe(map((response) => response.data));
  }

  generateRandomPage(min, max): number {
    return parseInt(Math.random() * (max - min + 1) + min);
  }
}
