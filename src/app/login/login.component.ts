import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@Input() storeemail :string;
  check=false;
  mail="";pwd="";
  
  constructor(private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
  }
  checkValue()
  {
    if(this.mail=="admin")
    {
        if(this.pwd=="admin123")
        {
           this.router.navigate(['/home'],{relativeTo:this.route});
        }
    }


  }
}
