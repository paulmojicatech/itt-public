import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CommonQuestionsComponent } from './components/common-questions/common-questions.component';

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: CommonQuestionsComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        CommonQuestionsComponent
    ]
})

export class CommonQuestionsModule { }