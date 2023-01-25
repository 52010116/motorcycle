import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../entities/post';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-edit',
  templateUrl: './rent-request.component.html',
  styleUrls: ['./rent-request.component.css']
})


export class RentRequestComponent implements OnInit {

  post: Post = {
    title: '',
    body: '',
    published: false
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
      body: '',
      published: false
    };
  }


}
