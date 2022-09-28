import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationContentComponent } from './homeComponents/application-content/application-content.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';

const routes: Routes = [
  { path: '', component: ApplicationContentComponent, pathMatch: 'full' },
  { path: 'whoAreWe', component: WhoAreWeComponent, pathMatch: 'full' },
  { path: 'whoWeAre', component: WhoAreWeComponent, pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
