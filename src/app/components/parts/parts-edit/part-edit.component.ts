import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-part-edit',
  templateUrl: './part-edit.component.html',
  styleUrls: ['./part-edit.component.css']
})
export class PartEditComponent implements OnInit {
  editForm = this.fb.nonNullable.group({
    id: [0],
    partName: ['clutch',],
    fitsModel: ['yamaha'],
    fitsYear: ['2019'],
  })
  

  constructor(private fb: FormBuilder) { }

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