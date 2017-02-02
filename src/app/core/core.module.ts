import { CommonModule } from '@angular/common';
import { DataService } from './data/data.service';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [],
    providers: [
        DataService
    ]
})
export class CoreModule { }