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
//2 Eigenschaften: formgroup = "editForm" mit Formbuilder erstellt.
// Mitgegeben werden id,partName, fitsModel,...
export class PartEditComponent implements OnInit {
  editForm = this.fb.nonNullable.group({
    id: [0],
    partName: ['',],
    fitsModel: [''],
    fitsBrand: [''],
    fitsYear: [''],
  })
  
  parts: SpareParts[] = []
//Konstruktor nimmt formbuilder-dienst => erstellung der "form"
  constructor(private fb: FormBuilder, private partService: PartService) { }
//ngoninit = lifecycle hook, wird nach konstruktor aufgerufen, "valueChanges" 
//gibt Änderungen auf der Konsole aus. 
  ngOnInit(): void {
    this.editForm.valueChanges
      .subscribe(console.log);
      
  }
// Protokolliert Wert und Zustand des Forms auf der Konsole
  save(): void {
      console.log('value', this.editForm.value)
      console.log('dirty', this.editForm.dirty)
      console.log()

  }



 //createRequest(): void {
 //  const data = {
 //    partName: this.post.partName,
 //    fitsModel: this.post.fitsModel,
 //    fitsBrand: this.post.fitsBrand,
 //    fitsYear: this.post.fitsYear

 
//this.partService.createPost(data)
//.subscribe({
//  next: (res) => {
//    console.log(res);
//    this.submitted = true;
//  }
 }

