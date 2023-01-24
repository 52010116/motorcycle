
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentSearchComponent } from '../rent-search/rent-search.component';
import { RentService } from '../rent.service';


@Component({
  selector: 'app-rent-card',
  templateUrl: './rent-card.component.html',
  styleUrls: ['./rent-card.component.css']
})
export class RentCardComponent {


  //Der Input-Dekorator dekoriert sämtliche Eigenschaften, welche die Komponente von ihrem Parent entgegennimmt.
  @Input() item: Motorcycle | null = null;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();
  feedback = "";

  //select wählt die Karte aus
  select() {
   this.selected = true
   this.selectedChange.emit(true);
  }

  //deselect hebt diese Auswahl wieder auf
  removeChoice() {
    this.selected = false
    this.selectedChange.emit(false);
  }


  // HttpClient via Dependency Injection
  constructor(private rentService: RentService) {
  }
  // löscht ausgewählte Karte aus db
  deleteChoice(): void{
    this.rentService
      .removeMotorcycleEntry(this.item)
      .subscribe()

  }

}
