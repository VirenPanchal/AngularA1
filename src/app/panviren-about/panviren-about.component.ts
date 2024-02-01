import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { panvirenPersonal } from '../myClasses/panviren';

@Component({
  selector: 'app-panviren-about',
  templateUrl: './panviren-about.component.html',
  styleUrl: './panviren-about.component.css'
})
export class PanvirenAboutComponent {
  @Input() panvirenMe!:panvirenPersonal;

}
