import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'password_generator_application';

  copied:boolean = false;
  charLength:number = 0;
  placeholderText:string = 'sf@siA92*aF';

  // password letters, symbols and numbers
  lowercaseLetters:string = 'abcdefghijklmonpqrstuvwxyz';
  uppercaseLetters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numbers:string = '0123456789';
  symbols:string = '!@#$%^&*()_+[]{}|;:,.<>?'; 


  ngOnInit(): void {
    console.log()
    console.log(this.evaluateCriteria(true, true, true, true));
  }

  evaluateCriteria (lowercase:boolean, uppercase:boolean, numbers:boolean, symbols:boolean): string {
    let passwordCriteria:string = ''

    if (lowercase) passwordCriteria += this.lowercaseLetters;
    if (uppercase) passwordCriteria += this.uppercaseLetters;
    if (numbers) passwordCriteria += this.numbers;
    if (symbols) passwordCriteria += this.symbols;

    if (passwordCriteria === '') return 'no criteria set';

    return passwordCriteria;
  }

  random (length:number) {
    return Math.floor(Math.random() * length);
  }

  generateRandomPassword (length:number, criteria:string) {
    let password = '';
    for (let i = 0; i < length; i++) {
      password = criteria[this.random(criteria.length)];
    }
  }
  
}
