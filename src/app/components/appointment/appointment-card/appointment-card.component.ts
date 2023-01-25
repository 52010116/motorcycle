
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appointments } from '../../entities/appointments';
import { AppointmentSearchComponent } from '../appointment-search/appointment-search.component';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})


export class AppointmentCardComponent {


  //Der Input-Dekorator dekoriert sämtliche Eigenschaften, welche die Komponente von ihrem Parent entgegennimmt.
  @Input() item: Appointments | null = null;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();
  private _feedback = "";
  public get feedback() {
    return this._feedback;
  }
  public set feedback(value) {
    this._feedback = value;
  }

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
  // // löscht ausgewählte Karte aus db
  // deleteChoice(): void{
  //   this.appointmentService
  //     .removeAppointmentEntry(this.item)
  //     .subscribe()

  // }

  // // Eintrag bearbeiten
  // editEntry(): void{
  //   this.appointmentService
  //     .updateAppointment(this.selected)
  // }
}
