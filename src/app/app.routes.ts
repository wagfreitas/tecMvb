import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./components/reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  {
    path: 'agenda',
    loadComponent: () => import('./components/agenda/agenda.page').then( m => m.AgendaPage)
  },
  {
    path: 'agendamentos',
    loadComponent: () => import('./components/agendamentos/agendamentos.page').then( m => m.AgendamentosPage)
  },

];
