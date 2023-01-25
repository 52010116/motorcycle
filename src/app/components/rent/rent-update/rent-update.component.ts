
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentSearchComponent } from '../rent-search/rent-search.component';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-update',
  templateUrl: './rent-update.component.html',
  styleUrls: ['./rent-update.component.css']
})
export class RentUpdateComponent implements OnInit {

  // Rent-Update war ein Versuch, welcher nicht geglückt ist...


  //Der Input-Dekorator dekoriert sämtliche Eigenschaften, welche die Komponente von ihrem Parent entgegennimmt.
  @Input() item: Motorcycle | null = null;
  @Input() selectedEdit = false;
  @Output() selectedChange = new EventEmitter<boolean>();


  constructor(private rentService: RentService) {
  }

  ngOnInit() {
  }

  // Motorrad auswählen, welches editiert werden soll
  selectEditMotorcycle(): void {
    this.selectedEdit = true
    this.selectedChange.emit(true);
  }

  /*
  //brand und year ändern
  editChoice(): void {
    const updatedMotorcycle = {this.brand, this.year};
    updatedMotorcycle.brand = this.editedBrand;
    updatedMotorcycle.year = this.editedYear;
  }


  // updated ausgewähltes Motorrad
  putMotorcycle(): void{
    this.rentService
      .updateMotorcycle(this.editedBrand, this.editedYear,)
      .subscribe()

  }
 */


}
