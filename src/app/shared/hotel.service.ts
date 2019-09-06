import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/Common/http';
import { Observable } from 'rxjs';
import { Hotel } from './Models/hoteles.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient: HttpClient) { }

  configUrlApi: string = 'http://localhost:8000/api/';

  getHoteles(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(this.configUrlApi + 'hoteles').pipe(map( result =>
        {
          return result.map(hotel => Object.assign(new Hotel(), hotel));
        }));
  }

}
