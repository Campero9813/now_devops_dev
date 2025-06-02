import { Component,Input } from '@angular/core';
import { AgregarCarritoComponent } from '../agregar-carrito/agregar-carrito.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carrito-desp',
  templateUrl: './carrito-desp.component.html',
  styleUrls: ['./carrito-desp.component.css']
})
export class CarritoDespComponent {
  @Input() cantidadProductos: number;

  constructor(private carritoService: CartService) {}
/* 
  ngOnInit() {
    this.actualizarCantidadProductos();
    this.carritoService.cantidadProductosCambiada.subscribe(() => {
      this.actualizarCantidadProductos();
    });
  } */
/*   private actualizarCantidadProductos() {
    this.cantidadProductos = this.carritoService.obtenerCantidadProductos();
  } */
  verCarrito(){
    console.log('Mostrando Carrito')
    console.log(this.cantidadProductos);
  }
  
}
