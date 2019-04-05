import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'conocenos', loadChildren: './pages/conocenos/conocenos.module#ConocenosPageModule' },
  { path: 'programa', loadChildren: './pages/programa/programa.module#ProgramaPageModule' },
  { path: 'premios', loadChildren: './pages/premios/premios.module#PremiosPageModule' },
  { path: 'planos', loadChildren: './pages/planos/planos.module#PlanosPageModule' },
  { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' },
  { path: 'bienvenida', loadChildren: './pages/bienvenida/bienvenida.module#BienvenidaPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'notificaciones', loadChildren: './notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'carteles', loadChildren: './pages/carteles/carteles.module#CartelesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
