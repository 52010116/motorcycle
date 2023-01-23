import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentSearchComponent } from './rent-search.component';

describe('RentSearchComponent', () => {
  let component: RentSearchComponent;
  let fixture: ComponentFixture<RentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
