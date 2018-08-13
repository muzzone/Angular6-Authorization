import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { UsersService } from './common/users.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {FirebaseAuthService} from './common/firebase-auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    MatToolbarModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase, 'ng-6-test'),
    AngularFireDatabaseModule
  ],
  providers: [UsersService, AngularFireAuth, FirebaseAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
