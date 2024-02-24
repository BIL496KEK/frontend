import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    onContactUs() {
        // Kullanıcı 'Contact Us' butonuna tıkladığında gerçekleşecek işlemler
        // Örneğin, iletişim sayfasına yönlendirme yapabilirsiniz
        // this.router.navigate(['/contact']);
      }
}
