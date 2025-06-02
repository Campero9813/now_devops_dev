import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { productosMysql } from 'src/app/interfaces/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent {
  productosFiltrados: productosMysql[] = [];

  constructor(
    private router:Router,
    public prodsNow: ProductosService,
    private renderer: Renderer2
    ){}
    ngOnInit() {
      this.prodsNow.cargarProductos().subscribe((productos: productosMysql[]) => {
        this.productosFiltrados = productos.filter(
          item => item.categoria === 'Especialidades'
        );
        this.animationInit();
      });
    }

    goBack() {
      window.history.back();
    }

    animationInit(){
      const elements = document.querySelectorAll('.has-animation');

      elements.forEach((element) => {
      const delay = parseInt(element.getAttribute('data-delay') || '0', 10);

      setTimeout(() => {
        this.renderer.addClass(element, 'animate-in');
      }, delay);
    });
    }
}
