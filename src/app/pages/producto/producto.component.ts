import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productosMysql } from '../../interfaces/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent {
  @ViewChild('modal') modal: ElementRef;

  modalVisible = false;
  imageUrl: string;

  producto: productosMysql;
  producto_actual: productosMysql;
  id: string;

  mostrar10L = true; // Indica qué template mostrar

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public productosMysql: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros) => {
      this.id = parametros['id'];
      this.productosMysql.getProdPrueba(this.id).subscribe((producto: productosMysql) => {
        this.producto = producto;
        this.producto_actual = producto;
        /* console.log(this.producto) */
      });
    });
  }

  toggleTemplateA(producto: productosMysql) {
    this.mostrar10L = true;
    this.producto_actual = producto;
  }

  toggleTemplateB(producto: productosMysql) {
    this.mostrar10L = true;
    this.producto_actual = producto;
  }

  mostrarImagen(imageUrl: string, foto: number) {
    const imagenes = document.querySelectorAll('.imagen');
    const imagen = imagenes[foto].getAttribute('src');
    if (imagen) {
      this.imageUrl = imagen;
      this.modalVisible = true;
    }
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  goBack() {
    window.history.back();
  }
}
