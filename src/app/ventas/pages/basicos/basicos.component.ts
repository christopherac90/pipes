import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'cristhofer'
  nombreUpper: string = 'CRISTHOFER'
  nombreCompleto: string= 'crIsthOFer aLvArAdO'


  fecha: Date = new Date();



}
