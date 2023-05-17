
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'event-around',
    loadChildren: () => import('./pages/event-around/event-around.module').then(m => m.EventAroundPageModule)
  },
  {
    path: 'my-calendar',
    loadChildren: () => import('./pages/my-calendar/my-calendar.module').then(m => m.MyCalendarPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },


  {
    path: 'concept-detail',
    loadChildren: () => import('./pages/concept-detail/concept-detail.module').then(m => m.ConceptDetailPageModule)
  },

  {
    path: 'organizer',
    loadChildren: () => import('./pages/organizer/organizer.module').then(m => m.OrganizerPageModule)
  },

  {
    path: 'terms-condition',
    loadChildren: () => import('./pages/terms-condition/terms-condition.module').then(m => m.TermsConditionPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },

  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'add-event',
    loadChildren: () => import('./pages/add-event/add-event.module').then( m => m.AddEventPageModule)
  },
  {
    path: 'add-clientes',
    loadChildren: () => import('./pages/add-clientes/add-clientes.module').then( m => m.AddClientesPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
