import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/dist/types/index';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient

  ) { }

  get<T>(url: string, options: Options):Observable<T>{
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
