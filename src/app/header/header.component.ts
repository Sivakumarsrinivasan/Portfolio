import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  fonticonenable = false;
  isScrolled = false;
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  ngOninit() {

  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Trigger when scrollY is past 100px (tweak this!)
    const triggerPoint = window.innerHeight; // 100vh
  this.isScrolled = window.scrollY >= triggerPoint;
    console.log(this.isScrolled);
    
  }
  enable() {
    this.fonticonenable = !this.fonticonenable;
  }

}
