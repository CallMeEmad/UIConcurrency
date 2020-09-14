import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayListComponent } from './components/display-list/display-list.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from "./components/notfound/notfound.component";
import { EditComponent } from './components/edit/edit.component';
import { ShortCircuitingGuard } from './guard/short-circuiting.guard';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/display',
    pathMatch:'full'

  },
 {
   path:'display',
   component: DisplayListComponent  
 },
 {
   path:'register',
   component:RegisterComponent
 },
 {
   path:'edit',
   canActivate:[ShortCircuitingGuard],
   component:EditComponent
 },
 {
   path:'**',
   component:NotFoundComponent
 }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
