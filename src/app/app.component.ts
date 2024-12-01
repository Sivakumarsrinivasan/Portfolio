import { Component, ViewChild } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private route:ActivatedRoute){

  }
  ngOninit(){    
    this.route.fragment.subscribe(res=>{
      console.log(res)
    })
    }
}
