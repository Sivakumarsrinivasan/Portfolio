import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent  {
  isscrolled = false;

  constructor(private el: ElementRef){

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
  items = [{
    img:'assets/P3.jpeg',
    heading:'Plannotate3',
    content:[
      'It is a drawing based civil application, that enables user to draw plotting annotation , attaching forms and images to the annotations.',
      'Main aim of this application is to draw or plot the annotation on the images that wherever we can find the defect in the building or tunnel in the image. Technologies used: Angular.'
    ]
  },

  {
    img:'assets/photo-collage.png',
    heading:'Qrdinn',
    content:[
      'Built a QR-driven food ordering platform where users scan a QR code to view menus and place orders seamlessly.',
      'Integrated with the backend to generate QR codes dynamically, and implemented functionality to download and store QR codes in a table on the frontend.',
'utilizing router query parameters to retrieve userId and tableId, and dynamically display the corresponding order details',
'Admin Panel: https://qrdin-adminpanel1.vercel.app/',
'QR Redirect Example:https://qrdinn.github.io/Qrdinn/#/userid/26024d74-1007-4ab1- a68e-b5c7d1056f7a/tableid/1'
    ]
    
  }];
  currentIndex = 0;

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
