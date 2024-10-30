import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  apiUri = '/api/animal';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
  getAllAnimalData(): Observable<any> {
    return this.http.get<any>(this.apiUri)
  }
  newAnimal(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUri,
      data,
      { headers: this.httpOptions });
  }



  constructor(private http: HttpClient) { }
}
