import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Post } from '../../entities/post';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.css']
})


export class AppointmentRequestComponent implements OnInit {

  post: Post = {
    id: '',
    title: '',
    body: ''
  };
  submitted = false;

  constructor(private appointmentService: AppointmentService) {
  }
  ngOnInit(): void {
  }

  createRequest(): void {
    const data = {
      title: this.post.title,
      body: this.post.body
    };

  //   this.appointmentService.createPost(data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.submitted = true;
  //       }
  //     });
  // }

  // newPost(): void {
  //   this.submitted = false;
  //   this.post = {
  //     title: '',
  //     body: ''
  //   };
  // }


}
}
