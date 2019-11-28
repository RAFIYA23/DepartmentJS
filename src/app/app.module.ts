import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    DeleteComponent,
    InsertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent, canActivate:[AuthService]},
       {path:"home",component:HomeComponent,canActivate:[AuthService]},
      {path:"register",component:InsertComponent,canActivate:[AuthService]},
      {path:"edit/:deptno",component:EditComponent,canActivate:[AuthService]},
      {path:"delete/:deptno",component:DeleteComponent,canActivate:[AuthService]},
      {path:"login",component:LoginComponent},
      {path:"**",component:HomeComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
