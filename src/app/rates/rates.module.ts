import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RatesComponent } from './components/rates/rates.component';

const routes: Route[] = [
  {
    pathMatch: 'full',
    path: '', component: RatesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RatesComponent]
})
export class RatesModule{ }