import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { CardComponent } from './components/card/card.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { AbrigosComponent } from './pages/abrigos/abrigos.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';


@NgModule({
  declarations: [
    ProductosComponent,
    CardComponent,
    IndumentariaComponent,
    AbrigosComponent,
    AccesoriosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
