import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'usuario',
    loadComponent: () => import('./components/usuario/usuario.page').then( m => m.UsuarioPage)
  },
];
