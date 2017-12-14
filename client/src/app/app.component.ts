import { LoopBackConfig } from './shared/sdk/lb.config';
import { Component } from '@angular/core';
import { Angular_LoopbackApi } from './shared/sdk/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  greet : string ;
  constructor(private al : Angular_LoopbackApi){
    //Just note that this will need to be done to new components that you create if you want to give it access to our loopback app.
    LoopBackConfig.setBaseURL("http://127.0.0.1:3000");
    LoopBackConfig.setApiVersion('api');
    console.log("aa");
  }

  submit(value){
    this.al.greet(value).subscribe(data => this.greet = data.greeting);
  }
}
