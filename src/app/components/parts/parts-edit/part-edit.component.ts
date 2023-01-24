import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-part-edit',
    templateUrl: './part-edit.component.html',
    styleUrls: ['./part-edit.component.css']
})

export class PartEditComponent implements OnInit {

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