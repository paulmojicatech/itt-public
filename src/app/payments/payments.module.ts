import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PaymentsComponent } from './components/payments/payments.component';

const routes: Route[] = [
    {
        path: '',
        component: PaymentsComponent,
        pathMatch: 'full',
        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PaymentsComponent
    ]
})

export class PaymentsModule { }