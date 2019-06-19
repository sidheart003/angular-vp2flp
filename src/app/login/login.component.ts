import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 step1view: boolean = true;
 step2view: boolean = false;
 step3view: boolean = false;
 button: boolean=false
  togglebutton(btype:string)
  {
    switch(btype)
    {
      case'button2':
      this.button=true

    }

  }
  toggleLoginview(view: string) {
    switch(view) {
      case 'step2':
        this.step1view = false;
        this.step2view = true;
        this.step3view = false;
        break;
      case 'step3':
        this.step1view = false;
        this.step2view = false;
        this.step3view = true;
        break;
      case 'step1':
        this.step1view=true;
        this.step2view = false;
        this.step3view = false;
        break;
    }
  }
}