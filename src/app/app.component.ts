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
  }

  generateRandom () {

  }
  
}
