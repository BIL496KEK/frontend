import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModule } from 'primeng/image';

import { SecondpageComponent } from './secondpage.component';
import { SecondpageRoutingModule } from './secondpage-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ImageModule,
        SecondpageRoutingModule
    ],
    declarations: [SecondpageComponent]
})
export class SecondpageModule { }