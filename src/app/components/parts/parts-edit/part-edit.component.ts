import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PartSearchComponent } from '../parts-search/parts-search.component';
import { PartService } from '../parts.service';
import { SpareParts } from '../../entities/parts';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-part-edit',
  templateUrl: './part-edit.component.html',
  styleUrls: ['./part-edit.component.css']
})

export class PartEditComponent implements OnInit {
  editForm = this.fb.nonNullable.group({
    id: [0],
    partName: ['',],
    fitsModel: [''],
    fitsBrand: [''],
    fitsYear: [''],
  })
  
  parts: SpareParts[] = []

  constructor(private fb: FormBuilder, private partService: PartService) { }

  ngOnInit(): void {
    this.editForm.valueChanges
      .subscribe(console.log);
      
  }

  save(): void {
      console.log('value', this.editForm.value)
      console.log('dirty', this.editForm.dirty)
      console.log()

  }
  
}