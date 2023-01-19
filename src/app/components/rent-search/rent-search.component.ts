import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Motorcycle } from 'src/app/motorcycle';

@Component({
  selector: 'app-rent-search',
  templateUrl: './rent-search.component.html',
  styleUrls: ['./rent-search.component.css']
})
export class RentComponent implements OnInit {

  brand = 'Yamaha';
  // model = 'XT 660'
  year = '2009';
  // hp = '48


  //Das motorcycle Array nimmt die gefundenen bikes auf. Es ist mit dem zu erzeugten Interface Motorcycle typisiert.
  motorcycles: Array<Motorcycle> = [];
  //Die Eigenschaft selectedMotorcycle repräsentiert den ausgewählten bike. Initialwert = 0
  selectedMotorcycle: Motorcycle | null = null;
  basket: any;

  // HttpClient anfordern Dependency Injection Dependency Injection bzw. Constructor Injection:
  constructor(private http: HttpClient) {

   }


  // Diese Methode ruft Angular nach dem Initialisieren der Komponente auf,
  // und somit kann sie für Initialisierungen von Eigenschaften verwendet werden.
  ngOnInit(): void {
  }

  //Die Methode search kümmert sich um das Abrufen der Bikes.
  search(): void {


    // server mit dem befehl installieren: npm install -g json-server
    // server mit dem befehl starten: json-server --watch db.json
    const url = ' http://localhost:3000/motorcycles';

    const headers = new HttpHeaders()
        .set('Accept', 'application/json');

    //Die Aufrufe von set die aktuelle Auflistung nicht verändern, sondern eine neue Auflistung zurückliefern.
    //Deswegen verkettet das Beispiel auch die einzelnen Aufrufe von set.

    const params = new HttpParams()
        .set('brand', this.brand)
        //.set('model', this.model)
        .set('year', this.year);
        //.set('hp', this.hp)


  //Die Methode get führt einen HTTP-Zugriff unter Verwendung der HTTP-Methode GET durch.
  //Diese Methode kommt typischerweise zum Abrufen von Daten zum Einsatz
    this.http.get<Motorcycle[]>(url, {headers, params}).subscribe({
        next: (motorcycles) => {
            this.motorcycles = motorcycles;
        },
        error: (err) => {
            console.error('Error', err);
        }
    });

 }

 // Die Methode select notiert sich den vom Benutzer ausgewähltes Bike
 select(m: Motorcycle): void{
    this.selectedMotorcycle = m;
 }
}
