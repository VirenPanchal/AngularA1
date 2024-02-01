import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanvirenCountryComponent } from './panviren-country.component';

describe('PanvirenCountryComponent', () => {
  let component: PanvirenCountryComponent;
  let fixture: ComponentFixture<PanvirenCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanvirenCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanvirenCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
