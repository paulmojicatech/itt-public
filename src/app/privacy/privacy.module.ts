import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: PrivacyComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PrivacyComponent]
})
export class PrivacyModule { }