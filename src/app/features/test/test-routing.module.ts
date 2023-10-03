import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogPageComponent } from './presentation/pages/dialog-page/dialog-page.component';

const routes: Routes = [
  {
    path: '',
    // TODO: standalone component in Angular 14
    component: DialogPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
