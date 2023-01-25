import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Appointments } from '../../entities/appointments';
import { AppointmentService } from '../appointment.service';

interface SearchCriteria {
  motorcycle: string;
  name: string;
}

@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.css']
})
export class AppointmentSearchComponent implements OnInit {

  motorcycle = '690SMCR';
  name = 'Maxl';

  appointments: Array<Appointments> = [];

  selectedAppointment: Appointments | null = null;



  basket: { [key: number]: boolean } = {};


  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
  }

  search(): void {
    const searchCriteria: SearchCriteria = { motorcycle: this.motorcycle, name: this.name };
    this.appointmentService.findAppointment(searchCriteria).subscribe({
      next: (appointments) => {
        this.appointments = appointments;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
