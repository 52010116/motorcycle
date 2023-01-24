
import { OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';
import { RentCardComponent } from '../rent-card/rent-card.component';
import { RentSearchComponent } from '../rent-search/rent-search.component';

@Component({
  selector: 'app-rent-edit',
  templateUrl: './rent-edit.component.html',
  styleUrls: ['./rent-edit.component.css']
})


export class RentEditComponent implements OnInit {

  constructor(private rentService: RentService) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
