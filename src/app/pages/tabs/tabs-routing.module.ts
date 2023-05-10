
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../tab-principal/tab-principal.module').then(m => m.TabPrincipalPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../event-around/event-around.module').then(m => m.EventAroundPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../my-calendar/my-calendar.module').then(m => m.MyCalendarPageModule)
      },

      {
        path: 'tab5',
        loadChildren: () => import('../add-event/add-event.module').then(m => m.AddEventPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
