import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18jn select
  nombre: string = 'Cristhofer'
  genero: string = 'M';
  invitacionMap = {
    'M': 'invitarlo',
    'F': 'invitarla'
  }

  //i18nplural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Bryan', 'Alonso'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un clientes esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.' 

  }

  cambiarCliente(){
    if(this.nombre === 'Cristhofer'){
      this.nombre = 'María';
      this.genero = 'F';
    }else{
      this.nombre = 'Cristhofer';
      this.genero = 'M';  
    }
  }

  borrarCliente(){
    this.clientes.shift();

  }


  //Key Value Pipe

  personas = {
    nombre: 'Cristhofer',
    edad:33,
    direccion: 'Cartago, Costa Rica'
  }

// JSON Pipe
heroes = [
  {
    nombre:'Superman',
    vuela: true
  },
  {
    nombre:'Robin',
    vuela: false
  },  {
    nombre:'Aquaman',
    vuela: false
  }
]

//Async Pipe
miObservable = interval(1000);

valorPromesa = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
      
    }, 3500);

  });
}
