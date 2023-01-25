import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpareParts } from '../../entities/parts';
import { PartSearchComponent } from 'src/app/components/parts/parts-search/parts-search.component'
import { PartService } from '../parts.service';

@Component({
  selector: 'app-part-card',
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.css']
})
export class PartCardComponent {
// 3 Inputs: item von spareparts
// selected = status der card
// selectedChange vom typ EventEmitter, gibt status der karte aus
  
  @Input() item: SpareParts | null = null;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  // select und deselect zum auswählen der card. Ändern Wert von "selected" über EventEmitter
  select() {
   this.selected = true
   this.selectedChange.emit(true);
  }


  deselect() {
    this.selected = false
    this.selectedChange.emit(false);
  }
  //Konstruktor nimmt partService entgegen; für die Durchführung von Operationen
  constructor(private partService: PartService) {

  }
//deletePart verwendet removePartEntry von PartService

  deletePart(): void{
    this.partService
      .removePartEntry(this.item)
      .subscribe()
  }

//editPart(): void{
//  this.partService
//
//}
}