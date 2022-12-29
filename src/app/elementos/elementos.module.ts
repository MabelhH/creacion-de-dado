import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuedadoComponent } from './nuedado/nuedado.component';



@NgModule({
  declarations: [
    NuedadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NuedadoComponent
  ]

})
export class ElementosModule { }
