import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CamaraComponent } from './camara/camara.component';

const routes: Routes = [
  {
    path: '',
    component: CamaraComponent
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'listaAlumnos',
    component: ListaAlumnosComponent
  },
  {
    path: 'productoDetalle/:id',
    component: ProductoDetalleComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
