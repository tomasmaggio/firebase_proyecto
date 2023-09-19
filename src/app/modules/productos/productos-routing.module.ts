import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosModule } from './productos.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { AbrigosComponent } from './pages/abrigos/abrigos.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';

const routes: Routes = [
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"indumentaria",component:IndumentariaComponent
  },
  {
    path:"abrigos",component:AbrigosComponent
  },
  {
    path:"accesorios",component:AccesoriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
