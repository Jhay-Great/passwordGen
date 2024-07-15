import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'password_generator_application';

  copied:boolean = false;
  charLength:number = 0;
  placeholderText:string = 'sf@siA92*aF';
  generatedPassword!:string;

  formState = {
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  }

  // password letters, symbols and numbers
  lowercaseLetters:string = 'abcdefghijklmonpqrstuvwxyz';
  uppercaseLetters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numbers:string = '0123456789';
  symbols:string = '!@#$%^&*()_+[]{}|;:,.<>?'; 



  ngOnInit(): void {
    // console.log(this.evaluateCriteria(true, true, true, true));
    // console.log(this.generateRandomPassword(8, this.evaluateCriteria(true, true, true, true)))
  }

  onCheckboxChange() {
    // console.log('called');
    // console.log('Uppercase state changed:', this.formState);
  }

  onGenerate () {
    const {uppercase, lowercase, numbers, symbols} = this.formState;
    
    const criteria = this.evaluateCriteria(lowercase, uppercase, numbers, symbols);

    const password = this.generateRandomPassword(criteria);

    this.generatedPassword = password;

    return;


  }

  evaluateCriteria (
    lowercase:boolean=false, 
    uppercase:boolean=false, 
    numbers:boolean=false, 
    symbols:boolean=false
  ): string {
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

  generateRandomPassword ( criteria:string, length:number = 8) {
    let password = '';
    for (let i = 0; i < length; i++) {
      password += criteria[this.random(criteria.length)];
    }

    // this.generatedPassword = password;
    return password;
  }
  
}
