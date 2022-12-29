import { Component } from '@angular/core';

@Component({
  selector: 'app-nuedado',
  templateUrl: './nuedado.component.html',
  styleUrls: ['./nuedado.component.css']
})
export class NuedadoComponent {

numero:number=0;
numero2:number=0;

tirardado(){
 this.numero=(Math.floor(Math.random()*10)+1)
 let x=7
 while( x>6 || x==this.numero2 ){
  this.numero=(Math.floor(Math.random()*10)+1)
  x=this.numero
 }
 this.numero2=this.numero


 
 
}
}
