import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';


@Component({
  selector: 'app-rent-card',
  templateUrl: './rent-card.component.html',
  styleUrls: ['./rent-card.component.css']
})
export class RentCardComponent {


  // Input Binding zum Erfassen von Daten von der Parent-Komponente.
  @Input() item: Motorcycle | null = null;
  @Input() selected = false;
  // Output Binding sendet als Child-Komponente and Parent
  @Output() selectedChange = new EventEmitter<boolean>();
  feedback = "";

  // HttpClient via Dependency Injection
  constructor(private rentService: RentService) {
  }

  // wählt eine Motorradkarte aus
  select() {
   this.selected = true
   this.selectedChange.emit(true);
  }

  // hebt diese Auswahl wieder auf
  removeChoice() {
    this.selected = false
    this.selectedChange.emit(false);
  }

  // löscht ausgewählte Karte aus db
  deleteChoice(): void{
    this.rentService
      .removeMotorcycleEntry(this.item)
      .subscribe()

  }

}
