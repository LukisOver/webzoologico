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
  newAnimal(data: any, value: any): Observable<any> {
    return this.http.post<any>(
      this.apiUri,
      data,
      { headers: this.httpOptions });
  }
  updateAnimal(id: any, data: any): Observable<any> {
    console.log(data)
    return this.http.put<any>(
      this.apiUri + '/' + id,
      data,
      { headers: this.httpOptions });
  }
  getOneAnimal(id: any): Observable<any> {
    return this.http.get<any>(
      this.apiUri + '/' + id,
      { headers: this.httpOptions });
  }
  deleteAnimal(id: any) {
    return this.http.delete<any>(
      this.apiUri + "/" + id,
      { headers: this.httpOptions });
  }




  constructor(private http: HttpClient) { }
}
