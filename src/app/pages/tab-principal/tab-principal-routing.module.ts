import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPrincipalPage } from './tab-principal.page';

const routes: Routes = [
  {
    path: '',
    component: TabPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPrincipalPageRoutingModule {}
