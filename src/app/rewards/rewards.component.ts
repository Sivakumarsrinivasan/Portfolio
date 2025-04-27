import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent {
  constructor(private el:ElementRef){

  }
 isscrolled = false;
 @HostListener('window :scroll')
  onwindowscroll(){
    const elementTop = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;
  
    if (scrollPosition > elementTop + 100) {
  this.isscrolled = true;
  
    }else{
      this.isscrolled = false
    }
    
  }
}
