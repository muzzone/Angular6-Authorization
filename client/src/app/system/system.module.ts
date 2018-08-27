import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';

@NgModule({
  imports: [SystemRoutingModule, CommonModule],
  declarations: [
    SystemComponent,
    UsersComponent
  ]
})

export class SystemModule {}
