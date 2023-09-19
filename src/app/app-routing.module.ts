import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KelasComponent } from './kelas/kelas.component';

const routes: Routes = [
  {
    path: 'kelas',
    component: KelasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [KelasComponent]