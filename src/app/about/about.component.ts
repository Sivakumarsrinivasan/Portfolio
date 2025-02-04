import { AfterViewInit, Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{
  fragmentSubscription!: Subscription;
constructor(private route: ActivatedRoute, private renderer: Renderer2){
  
}
 

ngAfterViewChecked(): void {
  // Check the current fragment in the URL
  const fragment = window.location.hash.replace('#', '');
  if (fragment === 'about') {
    const element = document.getElementById('imgsection');
    const contentelement = document.getElementById('contentsection');
    if (element) {
      // Reset animation to restart it every time the fragment is reached
      this.renderer.removeClass(element, 'animx');
      this.renderer.removeClass(contentelement,'anim-x')
      void element.offsetWidth;  // Forces reflow to restart animation
      this.renderer.addClass(element, 'animx');
      this.renderer.addClass(contentelement,'anim-x')

    }
  }
}


scrollToSection() {
  const element = document.getElementById('aboutsection');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

skills:boolean = true;;
experience:boolean = false;
education:boolean = false;
projects:boolean = false;


aboutCategorySelection(e:Event,category:Number){
if(category == 1){
  this.skills = true;
  this.experience = false;
  this.education = false;
  this.projects = false;
}else if(category == 2){
  this.skills = false;
  this.experience = true;
  this.education = false;
  this.projects = false;
}else if(category == 3){
  this.skills = false;
  this.experience = false;
  this.education = true;
  this.projects = false;
}else{
  this.skills = false;
  this.experience = false;
  this.education = false;
  this.projects = true;
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
