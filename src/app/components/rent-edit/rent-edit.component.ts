import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-edit',
  templateUrl: './rent-edit.component.html',
  styleUrls: ['./rent-edit.component.css']
})
export class RentEditComponent implements OnInit {

  id = 0;
  showDetails = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

}
