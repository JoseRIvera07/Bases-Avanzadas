import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { AgregarComponent } from './agregar/agregar.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'edit',
      component: EditComponent,
    },{
      path: 'main',
      component: MainComponent,
    },
    {
      path: 'agregar',
      component: AgregarComponent,
    },{
      path: '',
      redirectTo: 'agregar',
      pathMatch: 'full',
    }, {
      path: '**',
      redirectTo: 'agregar',
      pathMatch: 'full',
    }    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
  MainComponent,
  AgregarComponent,
  EditComponent
];
