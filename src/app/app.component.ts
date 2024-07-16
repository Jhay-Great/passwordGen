import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'password_generator_application';

  copied:boolean = false;
  charLength:number = 0;
  placeholderText:string = 'sf@siA92*aF';
  generatedPassword!:string;
  passwordStrength!:string;
  gaugeBox:number = 4;

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
    
    
    const password = this.generateRandomPassword(criteria, this.charLength);
    
    this.generatedPassword = password;
    const strength = this.evaluateStrength(lowercase, uppercase, numbers, symbols);
    this.passwordStrength = strength as string;
    console.log(this.passwordStrength);

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

  // evaluating strength
  evaluateStrength (
    lowercase:boolean, 
    uppercase:boolean, 
    numbers:boolean, 
    symbols:boolean
  ) {
    // const { uppercase, lowercase, numbers, symbols } = this.formState
    let characterCount = 0;

    if (this.generatedPassword.length < 8 || characterCount) return `too weak`;
    if (uppercase) characterCount++;
    if (lowercase) characterCount++;
    if (numbers) characterCount++;
    if (symbols) characterCount++;

    // critically look at this
    if (this.generatedPassword.length >= 12 && characterCount >= 3) return 'strong';
    if (this.generatedPassword.length >= 8 && characterCount >= 2) return 'medium';
    if (this.generatedPassword.length >= 8 && characterCount === 1) return 'weak';

    return;

  }

  handleStrengthGauge () {
    if (this.passwordStrength === 'too weak') return {
      background: '#F64A4A',
      border: 'none',
    }
    if (this.passwordStrength === 'weak') {
      // console.log('called')
      // return {'border-color': 'red', 'background' : 'bg-weak'}
      return {
        'background': '#FB7C58',
        'border': 'none',
      }
    }
    if (this.passwordStrength === 'medium') return {
      background: '#F8CD65',
      border: 'none',
    }
    if (this.passwordStrength === 'strong') return {
      background: '#A4FFAF',
      border: 'none',
    }
    return;
  }


  async copyToClipboard (text:string) {
    await navigator.clipboard.writeText(text);
    // console.log(string); 
  }

  // getting the value or length
  getPasswordLength (input:any) {
    return this.charLength = input.value;
  }
  
  
}
