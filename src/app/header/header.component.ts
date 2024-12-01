import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

developername:string = ''; 
fonticonenable = true;
@Output() scrollToAbout = new EventEmitter<void>();
constructor(private router: Router,private route:ActivatedRoute){
this.developername = "Sivakumar"
}
ngOninit(){
  this.route.fragment.subscribe(res=>{
    console.log(res)
  })
  }

enable(){
  debugger
 document.getElementById("headermenus")?.classList.remove("inactive")
 document.getElementById("headermenus")?.classList.add("active")
this.fonticonenable = false;
  
}
disable(){
  document.getElementById("headermenus")?.classList.remove("active")
  document.getElementById("headermenus")?.classList.add("inactive")
this.fonticonenable = true;
}
}
