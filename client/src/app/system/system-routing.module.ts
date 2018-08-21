import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: '', component: SystemComponent, children: [
      {path: 'users', component: UsersComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
