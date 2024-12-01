import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route:ActivatedRoute){

  }
  ngOninit(){
    // this.route.fragment.subscribe(res=>{
    //   console.log(res)
    // })
    }
}
