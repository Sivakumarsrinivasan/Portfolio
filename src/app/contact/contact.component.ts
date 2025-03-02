import { Component, Renderer2 } from '@angular/core';
import emailjs from '@emailjs/browser';
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

sendEmail(event: Event) {
  debugger
event.preventDefault();
  emailjs.sendForm("service_e97jy66", 'template_pws7zfs', event.target as HTMLFormElement, 'tFhDUhAHcj9S8O2lI')
    .then((response) => {
      console.log('Email sent successfully!', response);
      alert('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    });
}
}
