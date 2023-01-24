import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCardComponent } from './part-card.component';

describe('PartCardComponent', () => {
  let component: PartCardComponent;
  let fixture: ComponentFixture<PartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});