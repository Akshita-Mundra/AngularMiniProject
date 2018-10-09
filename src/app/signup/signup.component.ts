import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user="";password="";email="";contact="";
  checkbox=false;
  constructor() { }

  ngOnInit() {
  }
  storeValue()
  {
    this.checkbox=!this.checkbox;
    console.log(this.user,this.password,this.email,this.contact,this.checkbox);
  }
}
