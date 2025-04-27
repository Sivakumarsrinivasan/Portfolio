import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  fragmentSubscription!: Subscription;
constructor(private route: ActivatedRoute, private el: ElementRef){

}

 


ngOnInit(): void {
  // Subscribe to fragment changes

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


skills:boolean = false;
experience:boolean = true;
education:boolean = false;


aboutCategorySelection(e:Event,category:Number){
if(category == 1){
  this.skills = true;
  this.experience = false;
  this.education = false
}else if(category == 2){
  this.skills = false;
  this.experience = true;
  this.education = false
}else{
  this.skills = false;
  this.experience = false;
  this.education = true;
}


  let tablinks = document.getElementsByClassName('tab-links')

  for(let tablink of Array.from(tablinks)){
    tablink.classList.remove('about-active')
  }

 let target = e.currentTarget as HTMLElement
 target.classList.add('about-active')


}
ngOnDestroy(): void {
  if (this.fragmentSubscription) {
    this.fragmentSubscription.unsubscribe();
  }
}

}
