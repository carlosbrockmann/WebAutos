import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'autos',
    loadChildren: () =>
      import('./sites/autos/autos.module').then((m) => m.AutosModule),
  },
  { path: '', redirectTo: 'home' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
