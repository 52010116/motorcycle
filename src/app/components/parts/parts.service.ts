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
  

  find(partName: string, fitsModel: string): Observable<SpareParts[]> {


    const url = 'http://localhost:3000/parts';


    const headers = new HttpHeaders()
        .set('Accept', 'application/json');



    const params = new HttpParams()
        .set('partName', partName)
        .set('fitsModel', fitsModel);


    return this.http.get<SpareParts[]>(url, {headers, params});


    
    }



    removePartEntry(SpareParts: any):Observable<SpareParts> {
      const headers = new HttpHeaders()
        .set('Accept', 'application/json');
      return this.http.delete<SpareParts>(this.url+"/"+SpareParts.id, {headers})
    }
    createPost(data: any): Observable<any> {
      return this.http.post('http://localhost:3000/parts', data);
    }
    updatePost(id: any, data: any): Observable<any> {
      return this.http.put(`${'http://localhost:3000/parts'}/${id}`, data);
  } 
}
