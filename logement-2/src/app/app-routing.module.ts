import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogementComponent } from './logement/logement.component';
import { logement } from './models/logement-model';

const routes: Routes = [
  {
    path: 'logement',
    component: LogementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
