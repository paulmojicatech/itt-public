import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpfulFormsComponent } from './components/helpful-forms.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: HelpfulFormsComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        HelpfulFormsComponent
    ]
})
export class HelpfulFormsModule{ }