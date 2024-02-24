import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
    searchKeyword: string = '';

    ngOnInit() {
        // Başlangıçta herhangi bir işlem yapılacaksa
    }

    ngOnDestroy() {
        // Komponent yok edildiğinde yapılacak işlemler
    }

    onSearch() {
        console.log(this.searchKeyword); // Kullanıcı tarafından girilen arama kelimesini konsola yazdır
        // Burada arama işlemini gerçekleştirebilirsiniz
    }
}
