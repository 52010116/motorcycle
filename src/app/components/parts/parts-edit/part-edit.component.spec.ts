/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartEditComponent } from './part-edit.component';

describe('PartEditComponent', () => {
  let component: PartEditComponent;
  let fixture: ComponentFixture<PartEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});