import { Component } from '@angular/core';
import { panvirenPersonal } from './myClasses/panviren';
import { panvirenCountry } from './myClasses/panviren';
import { panvirenPics } from './myClasses/panviren';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A1panviren';

  PERpanviren:panvirenPersonal ={
    panvirenName: 'Viren Panchal',
    panvirenID: 991664038,
    panvirenLoginName: 'panviren',
    panvirenEmail: 'panviren@sheridancollege.ca',
    panvirenCampus: 'Davis',
    panvirenImageName: 'images/myimage.png',
    panvirenCurrentDate:new Date() 
  }

    CTRYpanviren:panvirenCountry ={
      panvirenCountry: 'India',
      panvirenCountryID: 356,
      panvirenCapitalCity: 'Delhi',
      panvirenAverageSalary: 27200,
      panvirenFlagImage: 'images/myimage.png'
    }

    PICSpanviren:panvirenPics={
      panvirenImage: 'images/myimage.png',
      panvirenFlagImage: 'images/myimage.png',
      panvirenImageName: 'VIREN',
      panvirenFlagImageName: 'INDIA'
    }

    }

  


  

  


