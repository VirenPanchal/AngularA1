import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanvirenAboutComponent } from './panviren-about.component';

describe('PanvirenAboutComponent', () => {
  let component: PanvirenAboutComponent;
  let fixture: ComponentFixture<PanvirenAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanvirenAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanvirenAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
