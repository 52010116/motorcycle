import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../entities/post';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-edit',
  templateUrl: './rent-request.component.html',
  styleUrls: ['./rent-request.component.css']
})


export class RentRequestComponent implements OnInit {

  // Definition des Formates
  post: Post = {
    title: '',
    body: ''
  };
  submitted = false;

  // "Import" von RentService
  constructor(private rentService: RentService) {
  }

  ngOnInit(): void {
  }

  // in der var "data" wird der Post gespeichert
  createRequest(): void {
    const data = {
      title: this.post.title,
      body: this.post.body
    };

  // Post wird mit dem Aufruf der Service Methode in der Datenbank gespeichert
    this.rentService.createPost(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        }
      });
  }

  // Möglichkeit um nach erstelltem Post, einen weiteren zu erstellen
  newPost(): void {
    this.submitted = false;
    this.post = {
      title: '',
      body: ''
    };
  }


}
