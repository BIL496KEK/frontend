import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecondpageComponent } from './secondpage.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SecondpageComponent }
    ])],
    exports: [RouterModule]
})
export class SecondpageRoutingModule { }
