import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Route[] = [
    {
        pathMatch: 'full',
        component: ContactMeComponent,
        path: ''
    }
];

@NgModule({
   imports: [
       CommonModule,
       RouterModule.forChild(routes),
       ReactiveFormsModule,
       MatProgressSpinnerModule,
       MatInputModule,
       MatButtonModule,
       MatSnackBarModule
   ], 
   declarations: [
       ContactMeComponent
   ]
})
export class ContactMeModule { }