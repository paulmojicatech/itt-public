import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/web/home.component';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        MatButtonModule
    ],
    declarations: [
        HomeComponent
    ],
    
})
export class HomeModule { }