import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productosMysql } from 'src/app/interfaces/productos.interface';
import { CartService } from 'src/app/services/cart.service';

import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  carrito: productosMysql[] = [];
  carritoVisible = false;

  constructor (private route: ActivatedRoute,
    private router: Router,
    public pruebas1: ProductosService) {}

  goBack() {
    window.history.back();
  }

  ngOnInit(){
    this.route.params.subscribe( params => {
      //console.log(params['termino']);

      this.pruebas1.buscarProd(params['termino']);
    });
  }

}
