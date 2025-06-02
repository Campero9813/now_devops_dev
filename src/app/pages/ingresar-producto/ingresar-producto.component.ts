import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { IngresarService } from 'src/app/services/ingresar.service';

@Component({
  selector: 'app-ingresar-producto',
  templateUrl: './ingresar-producto.component.html',
  styleUrls: ['./ingresar-producto.component.css']
})
export class IngresarProductoComponent {
  nombre: string;
  clave: number;
  precio: number;
  categoria: string;
  descripcion: string;
  url: string;
  stock: number;
  isLoading: boolean =false;

constructor(private dataService: IngresarService){}
enviarForm(){
  let data = { 
    nombre: this.nombre,
    clave: this.clave,
    precio: this.precio,
    categoria: this.categoria,
    descripcion: this.descripcion,
    url: 'ashdasd',
    stock: this.stock,
   };

   this.dataService.insertarProducto(data).subscribe(response =>{
    if (response) {
      console.log("Registro guardado", response);
    }else{
      console.log("Error al ingresar datos");
    }
   

  })
   /* console.log("nombre", this.nombre);
   this.isLoading =true;

   this.dataService.insertarProducto(data)
   .pipe(
      finalize(() => {
        console.log("Hasta aqui van bien los datos", data)
        this.isLoading =false;
      })
    )
    .subscribe({
      next: response => {
        console.log("Registro guardado", response);
      },
      error: error => {
        console.log("Error al ingresar datos", error);
      }
    }) */

}

}
