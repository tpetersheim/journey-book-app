import { CommonModule } from '@angular/common';
import { DataService } from './data/data.service';
import { NgModule } from '@angular/core';
import { SettingsService } from './settings.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [],
    providers: [
        DataService,
        SettingsService
    ]
})
export class CoreModule { }