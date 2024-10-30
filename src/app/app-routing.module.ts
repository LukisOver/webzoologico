// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';

const routes: Routes = [
{path:'/animal',component:AnimalComponent},
{ path: '', redirectTo: '/animal', pathMatch: 'full' },
{ path: '**', redirectTo: '/animal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
