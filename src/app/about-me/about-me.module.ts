import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/web/about-me.component';

const routes: Route[] = [
    { path: '', component: AboutMeComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AboutMeComponent]
})

export class AboutMeModule { }