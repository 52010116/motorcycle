

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { Appointments } from '../entities/appointments';
import { Post } from '../entities/post';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService  {
  AppointmentEntry(item: Appointments | null) {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) { }


  // server mit dem befehl installieren: npm install -g json-server
  // server mit dem befehl starten: json-server --watch db.json
  url = 'http://localhost:3000/appointments';

  findAppointment({ motorcycle, name }: { motorcycle: string; name: string; }): Observable<Appointments[]> {



    const headers = new HttpHeaders()
        .set('Accept', 'application/json');



    const params = new HttpParams()
        .set('motorcycle', motorcycle)
        .set('name', name);
        // .set('date', date);
        // .set('id', id)

    return this.http.get<Appointments[]>(this.url, {headers, params});
  }



  removeAppointmentEntry(Appointments: any):Observable<Appointments> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.delete<Appointments>(this.url+"/"+Appointments.id, {headers});
  }



  // createNewAppointment(Appointments: any):Observable<Appointments> {
  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/json');
  //   return this.http.post<Appointments>(this.url+"/"+Appointments.brand, Appointments.year, {headers})
  // }

  // updateAppointment(selectedAppointment: any):Observable<Appointments> {
  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/json');
  //   return this.http.put<Appointments>(this.url+"/"+selectedAppointment.id, selectedAppointment, {headers})
  // }



//   createPost(data: any): Observable<any> {
//     return this.http.post('http://localhost:3000/post', data);
//   }

//   updatePost(id: any, data: any): Observable<any> {
//     return this.http.put(`${'http://localhost:3000/posts'}/${id}`, data);
//   }

}
