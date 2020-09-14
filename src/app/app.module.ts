import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DisplayListComponent } from './components/display-list/display-list.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { EditComponent } from './components/edit/edit.component';
import { SortPipe } from './pipe/sort-pipe/sort.pipe';
import { HeaderInterceptor } from './interceptor/header.interceptor';
 
 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DisplayListComponent,
    NotFoundComponent,
    EditComponent,
    SortPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
