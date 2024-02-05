import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { panvirenPics } from '../myClasses/panviren';

@Component({
  selector: 'app-panviren-pics',
  templateUrl: './panviren-pics.component.html',
  styleUrl: './panviren-pics.component.css'
})
export class PanvirenPicsComponent {
  @Input() panvirenFdata!:panvirenPics;
 


}
