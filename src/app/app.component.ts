import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLoader: boolean = true;
  showHeader = true;

  constructor(
    public _infoPaginaService: InfoPaginaService,
    public productosMysql: ProductosService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  ngOnInit() {
    // Simula el tiempo de carga (ajusta según tus necesidades)
    setTimeout(() => {
      this.showLoader = false;
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.viewportScroller.scrollToPosition([0, 0]);
        });
    }, 7000);
  }
}
