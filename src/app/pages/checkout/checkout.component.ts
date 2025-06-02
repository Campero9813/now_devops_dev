import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productosMysql } from 'src/app/interfaces/productos.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductosService } from 'src/app/services/productos.service';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
carrito: productosMysql[]=[];
subtotal: number = 0;
envio: number = 90;
total: number = 0;

  constructor(
    public cart: CartService,
    private carritoService: CartService,
    private router: Router,
    private dataSharing: SharingService
    ){
    //Obtener los productos dle carrito que pasan del inicio

    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['productos']) {
      this.carrito = state['productos'];
      this.calcularsubTotal();
      this.calcularTotal();
    }
    this.carrito = this.carritoService.obtenerProductos()
  }


  eliminarDelCarrito(index: number): void {
    this.carritoService.eliminarProducto(index);
    this.carrito = this.carritoService.obtenerProductos();
  }

  calcularsubTotal(): void{
    this.subtotal = this.carrito.reduce((acumulador, producto) => {
      const price = producto.precio ? producto.precio : 0 ;
      const quantity = producto.cantidad? producto.cantidad : 0;
      return acumulador + (price * quantity);
    }, 0);
  }
  calcularTotal(){
    if (this.subtotal>= 1000) {
      this.total = this.subtotal
    }else{
      this.total = this.subtotal + this.envio;
    }
  }

  /* orden de compra */
  datosEnvio(): void {
    //aqui deberiamos de tener una funcion para enviar los datos a la base

      const productosCarrito = this.carritoService.obtenerProductos();
      this.dataSharing.datosCompra = productosCarrito;
      this.dataSharing.infoTotal = this.total;

    // Navegar a la página de finalizar compra y pasar los productos como parámetro
      this.router.navigate(['/envio']);
      /* this.router.navigate(['/envio'], { state: { productos: productosCarrito } }); */

      // vaciar carrito al hacer click al finalizar compra
      /* this.carritoService.vaciarCarrito(); */
  }
  /*
  incrementarCantidad(producto: productosMysql): void {
    if (producto.cantidad !== undefined) {
      producto.cantidad++;
      this.calcularTotal();
    }
  }

  decrementarCantidad(producto: productosMysql): void {
    if (producto.cantidad !== undefined) {
      if (producto.cantidad > 1) {
        producto.cantidad--;
        this.calcularTotal();
      }
    }
  }
  */

}
