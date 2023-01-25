
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { AppointmentSearchComponent } from '../appointment-search/appointment-search.component';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent {


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
  constructor(private appointmentService: AppointmentService) {
  }
  // löscht ausgewählte Karte aus db
  deleteChoice(): void{
    this.appointmentService
      .removeMotorcycleEntry(this.item)
      .subscribe()

  }

  // Eintrag bearbeiten
  editEntry(): void{
    this.appointmentService
      .updateMotorcycle(this.selected)
  }
}
