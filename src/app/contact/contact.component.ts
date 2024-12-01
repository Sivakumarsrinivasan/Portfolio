import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mail = ''
constructor(){
this.mail = 'sivakumar6242001@gmail.com'
}
}
