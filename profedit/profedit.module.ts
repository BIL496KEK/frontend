import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfeditRoutingModule } from './profedit-routing.module';
import { ProfeditComponent } from './profedit.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        CommonModule,
        ProfeditRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule
    ],
    declarations: [ProfeditComponent]
})
export class ProfeditModule { }