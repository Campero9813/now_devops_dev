import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { productosMysql } from 'src/app/interfaces/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css'],
})
export class RopaComponent {
  productosFiltrados: productosMysql[] = [];

  constructor(
    private router: Router,
    public prodsNow: ProductosService,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    this.prodsNow.cargarProductos().subscribe((productos: productosMysql[]) => {
      this.productosFiltrados = productos.filter(
        (item) =>
          item.categoria === 'Ropa' &&
          (item.presentacion === '10 L' ||
            item.presentacion === '9 L' ||
            item.presentacion === '19 L' ||
            item.presentacion === '1 L' ||
            item.presentacion === '20 L')
      );
      this.animationInit();
    });
  }

  goBack() {
    window.history.back();
  }

  animationInit() {
    const elements = document.querySelectorAll('.has-animation');

    elements.forEach((element) => {
      const delay = parseInt(element.getAttribute('data-delay') || '0', 10);

      setTimeout(() => {
        this.renderer.addClass(element, 'animate-in');
      }, delay);
    });
  }
 
  toggleFlip(card: HTMLElement): void {
    if (window.innerWidth <= 768) {
      card.classList.toggle('flipped');
      }
  }
}
