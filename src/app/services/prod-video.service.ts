import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prodVideo } from '../interfaces/prodVideo.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdVideoService {
  cargando = true;
  prods: prodVideo[] = [];
  prodsFiltrados: prodVideo[] = [];

  constructor(private http: HttpClient) {
    this.cargaProd();

   }

  private cargaProd(){
    return new Promise( (resolve, reject) => {
          //leer los prod
          this.http.get<prodVideo[]>('https://lifeproducts-cfa68-default-rtdb.firebaseio.com/productos_idx.json')
          /* this.http.get<prodVideo[]>('http://192.168.1.40/webservice_dev/web-lifeproducts/getProductos/listado-general.php') */
            .subscribe((resp: prodVideo[]) => {
              //console.log('Hola Prueba');
             //console.log(resp);
              this.prods = resp;
              resolve(' ');
              setTimeout(() => {
                this.cargando = false;  
              }, 3000);
          
          });


    });


    
  }

  getProd( id: String){
    return this.http.get(`https://lifeproducts-cfa68-default-rtdb.firebaseio.com/productos/${ id }.json`);
    /* return this.http.get(`http://192.168.1.40/webservice_dev/web-lifeproducts/getProductos/listado-general/${ id }.php`); */

    setTimeout(() => {
      this.cargando=false;
    }, 4000);
  }

  buscarProd(termino: string){
    if (this.prods.length === 0 ) {
      //Cargue Productos
      this.cargaProd().then( ()=> {
        //Ejecutar despues de tener los productos
        //APlicamos Filtro
        this.filtrarProductos( termino );
      });
    }else{
      //Aplicar Filtro
      this.filtrarProductos( termino );
    }


  
  }


  private filtrarProductos( termino: string ){
    /* this.prodsFiltrados = this.prods.filter( prods => {
      return true;
    }); */

    //console.log(this.prods);
    this.prodsFiltrados = [];
    termino = termino.toLocaleLowerCase();

    this.prods.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.prodsFiltrados.push( prod);
      }
    });

  }
}
