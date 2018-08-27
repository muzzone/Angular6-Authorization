import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';

@NgModule({
  imports: [SystemRoutingModule],
  declarations: [
    SystemComponent,
    UsersComponent
  ],
})

export class SystemModule {}
