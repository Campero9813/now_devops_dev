import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { productosMysql } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carritoKey = 'carrito';
  productos: productosMysql[] = [];

  constructor(private http: HttpClient){
    const carritoGuardado = localStorage.getItem(this.carritoKey);
    if (carritoGuardado) {
      this.productos =JSON.parse(carritoGuardado);
    }
  }

  private guardarCarrito(): void {
    localStorage.setItem(this.carritoKey, JSON.stringify(this.productos));
  }

  agregarProducto(producto: productosMysql): void {
    const productoExistente = this.productos.find(p => p.id_producto === producto.id_producto);
  if (productoExistente) {
    if (productoExistente.cantidad) {
      productoExistente.cantidad += 1;
    } else {
      productoExistente.cantidad = 1;
    }
  } else {
    producto.cantidad = 1;
    this.productos.push(producto);
  }
  this.guardarCarrito();
   /*  this.productos.push(producto);
    this.guardarCarrito(); */
  }

  obtenerProductos(): productosMysql[] {
    this.guardarCarrito();
    return this.productos;

  }

  eliminarProducto(index: number): void {
    this.productos.splice(index, 1);
    this.guardarCarrito();
  }

  vaciarCarrito(): void {
    this.productos = [];
    this.guardarCarrito();
  }


  realizarPago(address:any, phone:any, userpayerMercado:any ,items: any[], returnUrl: string) {
    console.log(userpayerMercado);
    const data = {
      items: items,
      payer: {
        phone: {phone},
        address: {address},
        userpayerMercado
      },
      returnUrl: returnUrl
    };

    return this.http.post('http://localhost:3000/crear-preferencia', data);
  }

}
