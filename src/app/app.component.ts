import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnInit {
  constructor(private primeNGConfig: PrimeNGConfig){

  }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }
//   nombre: string = 'Cristhofer Alvarado calderon';
// valor:number=1000;
// obj = {
//   nombre: this.nombre,
//   edad: this.valor 
// }
//   mostrarNombre(){
//     console.log(this.nombre);
//     console.log(this.valor);
//     console.log(this.obj);
//   }
}
