import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../../entities/post';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-request-edit',
  templateUrl: './rent-request-edit.component.html',
  styleUrls: ['./rent-request-edit.component.css']
})
export class RentRequestEditComponent implements OnInit {

  // Struktur wird vom Parent gegeben
  @Input() currentPost: Post = {
    title: '',
    body: ''
  };

  // "importieren und deklarieren" des RentService
  constructor(private rentService: RentService) {
  }

  ngOnInit(): void {

  }

  // gespeicherte Requests werden von db geladen
  getRequest(id: string): void {
    this.rentService.getPost(id)
      .subscribe()
  }


  //Titel und Description werden mit current überschrieben
  updatePublished(status: boolean): void {
    const data = {
      title: this.currentPost.title,
      description: this.currentPost.body,
      published: status
    };

    // Methode im Service wird für PUT aufgerufen
    this.rentService.updatePost(this.currentPost.id, this.currentPost)
      .subscribe()
  }

}




