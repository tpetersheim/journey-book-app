import { CommonModule } from '@angular/common';
import { DataService } from './data.service/data.service';
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