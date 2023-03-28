import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  valorCambiarMayuscula:boolean=false;
  ordernarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false  ,
      color: Color.verde
    },
    {
      nombre: 'Daredevik',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verda',
      vuela: true,
      color: Color.verde
    }


  ];



  cambiarMayusculas(){
    this.valorCambiarMayuscula = !this.valorCambiarMayuscula;
  }

  cambarOrden(valor:string){
    this.ordernarPor = valor;


  }

}
