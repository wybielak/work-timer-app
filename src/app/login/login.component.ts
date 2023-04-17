import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'wta-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  parentComponent: AppComponent;

  constructor(private appComponent: AppComponent) {
    this.parentComponent = appComponent;
  }

  login='';
  password='';

  ngOnInit(): void {
      
  }

  onSubmit() {
    if (this.login == "Ksygzy W" && this.password == "1qaz") {
      this.parentComponent.is_login_true = true;
    }
  }
  

}
