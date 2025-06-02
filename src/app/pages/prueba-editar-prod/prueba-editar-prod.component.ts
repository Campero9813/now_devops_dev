import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productosMysql } from 'src/app/interfaces/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-prueba-editar-prod',
  templateUrl: './prueba-editar-prod.component.html',
  styleUrls: ['./prueba-editar-prod.component.css']
})
export class PruebaEditarProdComponent {

  pruebaProductos: productosMysql;
  id: String[];

  constructor(private route: ActivatedRoute, public productosMysql: ProductosService){}

  ngOnInit() {
    this.route.params.subscribe((parametros) => {
        //console.log(parametros['id']);

        this.productosMysql.getProdPrueba(parametros['id']).subscribe((pruebaIndividual: productosMysql) => {
            this.id = parametros['id'];
            console.log("Aqui esta el producto")
            console.log(pruebaIndividual);
            this.pruebaProductos = pruebaIndividual;
        });
    });
}


}
