import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { WebMenuComponent } from './components/web-menu.component';
@NgModule({
    imports: [
        MatButtonModule, 
        MatMenuModule
    ],
    declarations: [WebMenuComponent]
})

export class PmtWebMenuModules { }