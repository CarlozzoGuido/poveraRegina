import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-registrazione';
  
  addutente(nome : HTMLInputElement , cognome : HTMLInputElement) : Boolean
  {
    let n: string = nome.value;
    let cn: string = cognome.value;

    console.log(n,cn)
    return false;

  }
}