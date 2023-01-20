import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Motorcycle } from 'src/app/motorcycle';
import { RentSearchComponent } from '../rent-search/rent-search.component';


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

  //select wählt die Karte aus
  select() {
   this.selected = true
   this.selectedChange.emit(true);
  }

  //deselect hebt diese Auswahl wieder auf
  deselect() {
    this.selected = false
    this.selectedChange.emit(true);
  }

}
