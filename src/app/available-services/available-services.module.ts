import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { AvaiableServicesComponent } from './components/web/avaiable-services.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const routes: Route[] = [
    { 
        path: '', 
        pathMatch: 'full', component: AvaiableServicesComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        RouterModule.forChild(routes),
        MatButtonModule
    ],
    declarations: [AvaiableServicesComponent]
})
export class AvailableServicesModule { }