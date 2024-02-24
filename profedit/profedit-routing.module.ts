import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfeditComponent } from './profedit.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProfeditComponent }
    ])],
    exports: [RouterModule]
})
export class ProfeditRoutingModule { }