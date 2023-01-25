import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpareParts } from 'src/app/components/entities/parts';

@Injectable({
  providedIn: 'root'
})
export class PartService  {

  constructor(private http: HttpClient) { }
    url = 'http://localhost:3000/parts';
  
// Suche nach Ersatzteilen mit partName und fitsModel. 

  find(partName: string, fitsModel: string): Observable<SpareParts[]> {

    // const url zu db.json
    const url = 'http://localhost:3000/parts';


    const headers = new HttpHeaders()
        .set('Accept', 'application/json');



    const params = new HttpParams()
        .set('partName', partName)
        .set('fitsModel', fitsModel);

//Sendet get Anfrage an den Endpunkt und gibt ein observable zurück
    return this.http.get<SpareParts[]>(url, {headers, params});


    
    }


// entfernt ersatzteile aus der datenbank anhand der ID, 
// Sendet DELETE Anfrage an den angegebenen Endpunkt mit den Daten des Ersatzteiles und gibt ein observable zurück, das die Antwort ausgibt
    removePartEntry(SpareParts: any):Observable<SpareParts> {
      const headers = new HttpHeaders()
        .set('Accept', 'application/json');
      return this.http.delete<SpareParts>(this.url+"/"+SpareParts.id, {headers})
    }
// CreatePost für neues ersatzteil, sendet post-anfrage an Endpunkt
    createPost(data: any): Observable<any> {
      return this.http.post('http://localhost:3000/parts', data);
    }
// Die Methode updatePost wird verwendet, um ein ersatzteil anhand seiner ID zu aktualisieren. 
//Sie sendet eine PUT-Anfrage an den angegebenen Endpunkt mit der ID und den Daten des Ersatzteils 
//und gibt ein Observable zurück, das das aktualisierte Ersatzteil ausgibt

    updatePost(id: any, data: any): Observable<any> {
      return this.http.put(`${'http://localhost:3000/parts'}/${id}`, data);
  } 
}
