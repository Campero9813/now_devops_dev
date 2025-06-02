import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-prueba-listar-mysql',
  templateUrl: './prueba-listar-mysql.component.html',
  styleUrls: ['./prueba-listar-mysql.component.css']
})
export class PruebaListarMysqlComponent {

  constructor( public productosMysql: ProductosService){ }

}
