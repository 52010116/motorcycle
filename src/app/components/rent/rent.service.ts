

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { Post } from '../entities/post';

@Injectable({
  providedIn: 'root'
})
export class RentService  {


  constructor(private http: HttpClient) { }


  // server mit dem befehl installieren: npm install -g json-server
  // server mit dem befehl starten: json-server --watch db.json
  url = 'http://localhost:3000/motorcycles';

  findMotorcycle(brand: string, year: string): Observable<Motorcycle[]> {



    // definiert welches Datenformat akzeptiert wird
    const headers = new HttpHeaders()
        .set('Accept', 'application/json');


    //Die Aufrufe von set die aktuelle Auflistung nicht verändern, sondern eine neue Auflistung zurückliefern.
    //Deswegen verkettet das Beispiel auch die einzelnen Aufrufe von set.
    const params = new HttpParams()
        .set('brand', brand)
        .set('year', year);
        //.set('hp', hp)
        //.set('model', model)

    return this.http.get<Motorcycle[]>(this.url, {headers, params});
  }



  removeMotorcycleEntry(Motorcycle: any):Observable<Motorcycle> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.delete<Motorcycle>(this.url+"/"+Motorcycle.id, {headers});
  }


  updateMotorcycle(Motorcycle: any): Observable<Motorcycle> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.put<Motorcycle>(this.url+"/"+Motorcycle.brand, Motorcycle.year, {headers});
  }


  createPost(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/posts', data);
  }




  // used for not yet implemented functionality
  createNewMotorcycle(Motorcycle: any):Observable<Motorcycle> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.post<Motorcycle>(this.url+"/"+Motorcycle.brand, Motorcycle.year, {headers})
  }

  // used for not yet implemented functionality
  updatePost(id: any, data: any): Observable<any> {
    return this.http.put(`${'http://localhost:3000/posts'}/${id}`, data);
  }

  // used for not yet implemented functionality
  getPost(id: any): Observable<Post> {
    return this.http.get<Post>(`${'http://localhost:3000/posts'}/${id}`);
  }
}
