import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

import { Post } from '../../entities/post';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-request-edit',
  templateUrl: './rent-request-edit.component.html',
  styleUrls: ['./rent-request-edit.component.css']
})
export class RentRequestEditComponent implements OnInit {


  @Input() viewMode = false;

  @Input() currentPost: Post = {
    title: '',
    body: '',
    published: false
  };
  message = '';


  constructor(private rentService: RentService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getRequest(this.route.snapshot.params["id"]);
    }
  }

  getRequest(id: string): void {
    this.rentService.getPost(id)
      .subscribe({
        next: (data) => {
          this.currentPost = data;
          console.log(data);
        },
      });
  }


  updatePublished(status: boolean): void {
    const data = {
      title: this.currentPost.title,
      description: this.currentPost.body,
      published: status
    };


    this.rentService.updatePost(this.currentPost.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentPost.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
      });
  }


  updateRequest(): void {
    this.message = '';

    this.rentService.updatePost(this.currentPost.id, this.currentPost)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
      });
  }

}

//currenttutorial


