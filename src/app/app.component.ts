import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    nombre    : string = 'Capitán América';
    personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
    PI        : number = Math.PI;
    porcentaje: number = 0.234;
    salario   : number = 1234.5;
}
