import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { UsersComponent } from './components/configuration/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { DatatableViewComponent } from './components/datatable-view/datatable-view.component';
import { SystemComponent } from './components/configuration/system/system.component';
import { MastersComponent } from './components/configuration/masters/masters.component';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'todo-view',
    component: UsersComponent
  },
  {
    // Needed for hash routing
    path: 'error',
    component: LoginComponent
  },
  {
    // Needed for hash routing
    path: 'state',
    component: LoginComponent
  },
  {
    // Needed for hash routing
    path: 'code',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: MasterPageComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'datatable',
    component: MasterPageComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: DatatableViewComponent
      }
    ]
  },
  {
    path: 'config',
    component: MasterPageComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: ConfigurationComponent
      }
    ]
  },
  {
    path: 'users',
    component: MasterPageComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: UsersComponent
      }
    ]
  },
  {
    path: 'masters',
    component: MasterPageComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: MastersComponent
      }
    ]
  },
  {
    path: 'system',
    component: MasterPageComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: SystemComponent
      }
    ]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
