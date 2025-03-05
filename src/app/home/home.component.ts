import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private route:ActivatedRoute){

  }
  ngOninit(){
   
    }
    isSmallScreen: boolean = window.innerWidth < 651; // Adjust breakpoint as needed

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth < 651;
  }
    navigate(){
      window.open("https://www.linkedin.com/in/siva-kumar-9b9501213")
    }

}
