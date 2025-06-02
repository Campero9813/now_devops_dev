import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productosMysql } from '../interfaces/productos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  /* private url = 'https://nowproducts.mx/webservices/NowImagenes/ObtenerProductos/'; */
  private url_dev = 'https://nowproducts.mx/webservices/NowImagenes_new/ObtenerProductos/';

  public cargando = true;
  private prueba: productosMysql[] = [];
  public prodsFiltrados: productosMysql[] = [];

  constructor(private http: HttpClient) {}

  cargarProductos(): Observable<productosMysql[]> {
    return this.http.get<productosMysql[]>(this.url_dev, {
      responseType: 'json',
    });
  }

  getProdPrueba(id: string): Observable<productosMysql> {
    /* return this.http.get<productosMysql>(`https://nowproducts.mx/webservices/NowImagenes/ObtenerProductos/?id_producto=${id}`); */
    return this.http.get<productosMysql>(`https://nowproducts.mx/webservices/NowImagenes_new/ObtenerProductos/?id_producto=${id}`);
  }

  buscarProd(termino: string) {
    if (this.prueba.length === 0) {
      this.cargarProductos().subscribe((productos) => {
        this.prueba = productos;
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.prodsFiltrados = [];
    const terminoNormalizado = this.removeAcento(termino.toLocaleLowerCase());

    this.prueba.forEach((producto) => {
      if (producto.nombre_producto && producto.categoria) {
        const nombre = this.removeAcento(producto.nombre_producto.toLocaleLowerCase());
        const categoria = this.removeAcento(producto.categoria.toLocaleLowerCase());

        if (nombre.includes(terminoNormalizado) || categoria.includes(terminoNormalizado)) {
          this.prodsFiltrados.push(producto);
        }
      }
    });
  }

  private removeAcento(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
