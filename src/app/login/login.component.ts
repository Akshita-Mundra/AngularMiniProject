import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@Input() storeemail :string;
  password="";
  email="";
  constructor() { }

  ngOnInit() {
  }
  storeValue()
  {
    console.log(this.email);
    console.log(this.password);

  }
}
