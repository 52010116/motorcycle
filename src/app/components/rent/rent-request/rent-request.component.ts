import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Post } from '../../entities/post';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';


@Component({
  selector: 'app-rent-edit',
  templateUrl: './rent-request.component.html',
  styleUrls: ['./rent-request.component.css']
})


export class RentRequestComponent implements OnInit {

  post: Post = {
    id: '',
    title: '',
    body: ''
  };
  submitted = false;

  constructor(private rentService: RentService) {
  }
  ngOnInit(): void {
  }

  createRequest(): void {
    const data = {
      title: this.post.title,
      body: this.post.body
    };

    this.rentService.createPost(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        }
      });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      title: '',
      body: ''
    };
  }



  /*
  // Neuen Eintrag hinzufügen
  newEntry(): void{
    this.rentService
      .createNewMotorcycle
      .subscribe()
  }


  newItem: any = {
  }



  // löscht ausgewählte Karte aus db
  createRequest(): void{
    this.rentService
      .createPost


  }
*/
}
