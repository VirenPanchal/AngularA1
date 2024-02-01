import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanvirenPicsComponent } from './panviren-pics.component';

describe('PanvirenPicsComponent', () => {
  let component: PanvirenPicsComponent;
  let fixture: ComponentFixture<PanvirenPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanvirenPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanvirenPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
