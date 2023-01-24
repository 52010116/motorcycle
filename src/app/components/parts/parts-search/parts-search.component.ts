import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpareParts } from '../../entities/parts';
import { PartService } from '../parts.service';


@Component({
  selector: 'app-parts-search',
  templateUrl: './parts-search.component.html',
  styleUrls: ['./parts-search.component.css']
})

export class PartSearchComponent implements OnInit {

  partName = 'Clutch';
  fitsModel = '690 SCMR';

  post: SpareParts = {
    id: '',
    partName: '',
    fitsModel: '',
    fitsBrand: '',
    fitsYear: ''
  };

  submitted = false;
  
  parts: Array<SpareParts> = [];

  
  selectedPart: SpareParts | null = null;




  basket: { [key: number]: boolean} = {
    
  };



  
  constructor(private partService: PartService) {
  }


 
  ngOnInit(): void {
  }

 
  search(): void {

    this.partService.find(this.partName, this.fitsModel).subscribe({
      next: (parts) => {
        this.parts = parts
      }
    });

  }
  createRequest(): void {
    const data = {
      partName: this.post.partName,
      fitsModel: this.post.fitsModel,
      fitsBrand: this.post.fitsBrand,
      fitsYear: this.post.fitsYear

    };

    this.partService.createPost(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        }
      });
  }

  newPost(): void {
    this.submitted = false
    this.post = {
      partName: '',
      fitsModel: '',
      fitsBrand: '',
      fitsYear: '',
    };
  }
  
  select(p: SpareParts): void{
    this.selectedPart = p;
  }
}

