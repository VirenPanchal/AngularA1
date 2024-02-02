import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { panvirenCountry } from '../myClasses/panviren';

@Component({
  selector: 'app-panviren-country',
  templateUrl: './panviren-country.component.html',
  styleUrl: './panviren-country.component.css'
})
export class PanvirenCountryComponent {
        @Input() panvirenData!:panvirenCountry;
}
