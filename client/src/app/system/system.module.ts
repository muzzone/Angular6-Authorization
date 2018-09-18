import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  imports: [SystemRoutingModule, CommonModule, MatTableModule, MatButtonModule],
  declarations: [
    SystemComponent,
    UsersComponent
  ]
})

export class SystemModule {}
