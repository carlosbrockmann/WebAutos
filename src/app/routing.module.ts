import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { HaendlerComponent } from './sites/haendler/haendler.component';
import { PersonComponent } from './sites/person/person.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'haendler', component: HaendlerComponent },
  { path: 'person', component: PersonComponent },
  {
    path: 'autos',
    loadChildren: () =>
      import('./sites/autos/autos.module').then((m) => m.AutosModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
