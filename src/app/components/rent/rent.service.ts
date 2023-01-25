import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { Post } from '../entities/post';

@Injectable({
  providedIn: 'root'
})
export class RentService  {

  // Injektion von HTTPClient Modul
  constructor(private http: HttpClient) { }

  // SERVER
  // server mit dem befehl installieren: npm install -g json-server
  // server mit dem befehl starten: json-server --watch db.json
  url = 'http://localhost:3000/motorcycles';



  findMotorcycle(brand: string, year: string): Observable<Motorcycle[]> {
    // definiert welches Datenformat akzeptiert wird
    const headers = new HttpHeaders()
        .set('Accept', 'application/json');
    //Die Aufrufe von Set verändern die Auflistung nicht, sondern liefern eine neue Auflistung zurück.
    const params = new HttpParams()
        .set('brand', brand)
        .set('year', year);
        //Verkettung der einzelnen Aufrufe von set.

        //.set('hp', hp)
        //.set('model', model)
    return this.http.get<Motorcycle[]>(this.url, {headers, params});
  }


  // Methode um mittels delete einen Eintrag aus der Datenbank zu löschen
  removeMotorcycleEntry(Motorcycle: any):Observable<Motorcycle> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.delete<Motorcycle>(this.url+"/"+Motorcycle.id, {headers});
  }

  // Methode um mittels Put ein bestehendes Motorrad zu ändern (brand und year)
  updateMotorcycle(Motorcycle: any): Observable<Motorcycle> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.put<Motorcycle>(this.url+"/"+Motorcycle.brand, Motorcycle.year, {headers});
  }

  // Methode um mittels Post einen neuen Eintrag in die Datenbank zu schreiben
  createPost(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/posts', data);
  }


  // folgende Methoden sind nicht lauffähig umgesetzt

  // used for not yet implemented functionality
  updatePost(id: any, data: any): Observable<any> {
    return this.http.put(`${'http://localhost:3000/posts'}/${id}`, data);
  }

  // used for not yet implemented functionality
  getPost(id: any): Observable<Post> {
    return this.http.get<Post>(`${'http://localhost:3000/posts'}/${id}`);
  }

   // used for not yet implemented functionality
   createNewMotorcycle(Motorcycle: any):Observable<Motorcycle> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.post<Motorcycle>(this.url+"/"+Motorcycle.brand, Motorcycle.year, {headers})
  }
}
