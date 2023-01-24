

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-search',
  templateUrl: './rent-search.component.html',
  styleUrls: ['./rent-search.component.css']
})
export class RentSearchComponent implements OnInit {

  brand = 'Yamaha';
  year = '2009';
  // model = 'XT 660'
  // hp = '48

  //Das motorcycle Array nimmt die gefundenen bikes auf. Es ist mit dem zu erzeugten Interface Motorcycle typisiert.
  motorcycles: Array<Motorcycle> = [];

  //Die Eigenschaft selectedMotorcycle repräsentiert den ausgewählten bike. Initialwert = 0
  selectedMotorcycle: Motorcycle | null = null;

  // valid inspection Option (checkbox)
  // implementierung falls zeit über bleibt
  //valid_inspectionFilter = true;


  basket: { [key: number]: boolean } = {

  };



  // HttpClient anfordern Dependency Injection Dependency Injection bzw. Constructor Injection:
  constructor(private rentService: RentService) {
  }


  // Diese Methode ruft Angular nach dem Initialisieren der Komponente auf,
  // und somit kann sie für Initialisierungen von Eigenschaften verwendet werden.
  ngOnInit(): void {
  }

  //Die Methode search kümmert sich um das Abrufen der Bikes.
  search(): void {
    this.rentService.findMotorcycle(this.brand, this.year).subscribe({
      next: (motorcycles) => {
        this.motorcycles = motorcycles
      }
    });

  }
  /*
  update(selection: any): void {
    this.rentService
    .change(selection)
    .subscribe()
  }
  */



}

