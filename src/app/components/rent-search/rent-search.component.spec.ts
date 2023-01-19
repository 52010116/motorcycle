import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentComponent } from './rent-search.component';

describe('RentComponent', () => {
  let component: RentComponent;
  let fixture: ComponentFixture<RentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
