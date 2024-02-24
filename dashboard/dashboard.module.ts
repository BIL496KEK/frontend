import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './dashboard-routing.module';

import { InputTextModule } from "primeng/inputtext";
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        InputGroupAddonModule,
        InputGroupModule,
        FormsModule,
        DashboardsRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
