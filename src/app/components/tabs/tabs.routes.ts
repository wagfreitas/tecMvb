import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'principal',
        loadComponent: () =>
          import('../tabPrincipal/tab-principal.page').then((m) => m.TabPrincipalPage),
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('../tabCadastro/tab-clientes.page').then((m) => m.TabClientesPage),
      },
      {
        path: 'produtos',
        loadComponent: () =>
          import('../tabProdutos/tab-produtos.page').then((m) => m.TabProdutosPage),
      },
      {
        path: '',
        redirectTo: '/tabs/principal',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/principal',
    pathMatch: 'full',
  },
];
