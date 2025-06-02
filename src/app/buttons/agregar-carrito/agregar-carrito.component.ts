import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


const contenedorCarrito = document.querySelector('#lista-carrito tbody');

@Component({
  selector: 'app-agregar-carrito',
  templateUrl: './agregar-carrito.component.html',
  styleUrls: ['./agregar-carrito.component.css']
})
export class AgregarCarritoComponent {
  @Input() producto:any;


constructor(private carritoService: CartService){}
agregarCarrito(){
  this.carritoService.agregarProducto(this.producto);
  console.log('Producto Agregado al carrito', this.producto)
}




  agregado(){
  let btnClick = document.querySelectorAll('.add-to-cart');
  console.log(btnClick);
  btnClick.forEach(function(e){
    e.addEventListener('click', function(a){
      e.classList.toggle('added');
      console.log("Prueba de que entramos aqui sin errores");
    })
  });
  }

  agregar(){

    let btnNew = document.querySelectorAll('.button');
    btnNew.forEach(button => button.addEventListener('click', e => {

      if(!button.classList.contains('loading')) {
          button.classList.add('loading');
          setTimeout(() => button.classList.remove('loading'), 3700);
      }
      e.preventDefault();
  }));

  }

}
