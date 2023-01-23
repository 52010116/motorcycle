
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorcycle } from 'src/app/components/entities/motorcycle';

@Injectable({
  providedIn: 'root'
})
export class RentService  {

  constructor(private http: HttpClient) { }

  find(brand: string, year: string): Observable<Motorcycle[]> {

    // server mit dem befehl installieren: npm install -g json-server
    // server mit dem befehl starten: json-server --watch db.json
    const url = 'http://localhost:3000/motorcycles';

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

    return this.http.get<Motorcycle[]>(url, {headers, params});
  }
}
