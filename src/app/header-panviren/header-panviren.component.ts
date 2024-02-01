import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { panvirenPersonal } from '../myClasses/panviren';

@Component({
  selector: 'app-header-panviren',
  templateUrl: './header-panviren.component.html',
  styleUrl: './header-panviren.component.css'
})
export class HeaderPanvirenComponent {
  
  @Input()
  panvirenChild!: panvirenPersonal;
  currentdate!:panvirenPersonal;

}
