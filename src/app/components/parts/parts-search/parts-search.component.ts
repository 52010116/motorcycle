import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpareParts } from '../../entities/parts';
import { PartService } from '../parts.service';


@Component({
  selector: 'app-parts-search',
  templateUrl: './parts-search.component.html',
  styleUrls: ['./parts-search.component.css']
})

export class PartSearchComponent implements OnInit {

  partName = '';
  fitsModel = '';


  //Das motorcycle Array nimmt die gefundenen bikes auf. Es ist mit dem zu erzeugten Interface Motorcycle typisiert.
  parts: Array<SpareParts> = [];

  //Die Eigenschaft selectedMotorcycle repräsentiert den ausgewählten bike. Initialwert = 0
  selectedPart: SpareParts | null = null;




  basket: { [key: number]: boolean} = {
    
  };



  // HttpClient anfordern Dependency Injection Dependency Injection bzw. Constructor Injection:
  constructor(private partService: PartService) {
  }


  // Diese Methode ruft Angular nach dem Initialisieren der Komponente auf,
  // und somit kann sie für Initialisierungen von Eigenschaften verwendet werden.
  ngOnInit(): void {
  }

  //Die Methode search kümmert sich um das Abrufen der Bikes.
  search(): void {

    this.partService.find(this.partName, this.fitsModel).subscribe({
      next: (parts) => {
        this.parts = parts
      }
    });

  }

  // Die Methode select notiert sich den vom Benutzer ausgewähltes Bike
  select(p: SpareParts): void{
    this.selectedPart = p;
  }

}

