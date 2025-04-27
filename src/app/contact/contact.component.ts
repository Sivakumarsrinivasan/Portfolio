import { Component, ElementRef, HostListener } from '@angular/core';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mail = ''
  isscrolled = false;
  constructor(private el:ElementRef) {
    this.mail = 'ssivakumar.dev@gmail.com'
  }
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

  sendEmail(event: Event) {
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
  navigateto() {
    window.open('mailto:ssivakumar.dev@gmail.com')
  }
}
