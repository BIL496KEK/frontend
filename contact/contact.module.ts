import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModule } from 'primeng/image';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        CommonModule,
        ImageModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        ContactRoutingModule
    ],
    declarations: [ContactComponent]
})
export class ContactModule { }