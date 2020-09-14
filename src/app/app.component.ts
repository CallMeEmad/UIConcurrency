import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'people';
  public isHomeActive : boolean=true;
 
  public changeState (value : boolean) : void{
    this.isHomeActive = value;
  }
 
}
