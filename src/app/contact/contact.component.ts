import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mail = ''
constructor(private renderer: Renderer2){
this.mail = 'ssivakumar.dev@gmail.com'
}

ngAfterViewChecked(): void {
  // Check the current fragment in the URL
  const fragment = window.location.hash.replace('#', '');
  if (fragment === 'Contact') {
    const element = document.getElementById('contact-section');
    if (element) {
      // Reset animation to restart it every time the fragment is reached
      this.renderer.removeClass(element, 'anim-contact');
      void element.offsetWidth;  // Forces reflow to restart animation
      this.renderer.addClass(element, 'anim-contact');

    }
  }
}
}
