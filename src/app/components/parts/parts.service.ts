import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpareParts } from 'src/app/components/entities/parts';

@Injectable({
  providedIn: 'root'
})
export class PartService  {

  constructor(private http: HttpClient) { }

  find(partName: string, fitsModel: string): Observable<SpareParts[]> {

    // server mit dem befehl installieren: npm install -g json-server
    // server mit dem befehl starten: json-server --watch db.json
    const url = 'http://localhost:3000/parts';

    // definiert welches Datenformat akzeptiert wird
    const headers = new HttpHeaders()
        .set('Accept', 'application/json');


    //Die Aufrufe von set die aktuelle Auflistung nicht verändern, sondern eine neue Auflistung zurückliefern.
    //Deswegen verkettet das Beispiel auch die einzelnen Aufrufe von set.
    const params = new HttpParams()
        .set('partName', partName)
        .set('fitsModel', fitsModel);
        //.set('hp', hp)
        //.set('model', model)

    return this.http.get<SpareParts[]>(url, {headers, params});
  }
}