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

  //motorcycle Array nimmt die gefundenen Motorräder auf.
  motorcycles: Array<Motorcycle> = [];

  // selectedMotorcycle = ausgewähltes Motorrad. Initialwert = 0
  selectedMotorcycle: Motorcycle | null = null;

  // basket der uns die Id der ausgewählten Karte anzeigt und ob sie ausgewählt ist oder nicht
  basket: { [key: number]: boolean } = {
  };

  // HttpClient anfordern via Dependency Injection.
  constructor(private rentService: RentService) {
  }

  // Diese Methode ruft Angular nach dem Initialisieren der Komponente auf,
  // und wird für Initialisierungen von Eigenschaften verwendet.
  ngOnInit(): void {
  }

  //Die Methode ruft findMotorcycles auf welche via get Einträge aus der db abruft.
  search(): void {
    this.rentService.findMotorcycle(this.brand, this.year).subscribe({
      next: (motorcycles) => {
        this.motorcycles = motorcycles
      }
    });

  }

}

