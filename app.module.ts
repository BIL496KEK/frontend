import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';


import { IconService } from './demo/service/icon.service';
import { PhotoService } from './demo/service/photo.service';
import { ProductService } from './demo/service/product.service';



@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
          IconService, ProductService,
        PhotoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
