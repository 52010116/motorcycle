import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSearchComponent } from 'src/app/components/parts/parts-search/parts-search.component';

describe('PartSearchComponent', () => {
  let component: PartSearchComponent;
  let fixture: ComponentFixture<PartSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
