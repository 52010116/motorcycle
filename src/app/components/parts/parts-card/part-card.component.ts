import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpareParts } from '../../entities/parts';
import { PartSearchComponent } from 'src/app/components/parts/parts-search/parts-search.component'


@Component({
  selector: 'app-part-card',
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.css']
})
export class PartCardComponent {

  //Der Input-Dekorator dekoriert sämtliche Eigenschaften, welche die Komponente von ihrem Parent entgegennimmt.
  @Input() item: SpareParts | null = null;
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
    this.selectedChange.emit(false);
  }

}