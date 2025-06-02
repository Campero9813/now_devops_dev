import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresarService {
 urlPost = 'http://192.168.1.40/webservice_dev/web-lifeproducts/putProductos/'

  constructor( private http: HttpClient) { }

  insertarProducto(data: any) {
    console.log(data);
    const dataJson = JSON.stringify(data);
    const jsonData = dataJson.trim();
    const datajson = JSON.parse(jsonData);
    try {
      console.log("Aqui pasamos ya corregido el Json" + jsonData);
    } catch (error) {
      console.log("Aqui vendra un error" + error)
    }
    return this.http.post(this.urlPost, jsonData,{responseType: 'text'});

    /* const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  .set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, X-Requested-With');
     */
  /* let prueba = JSON.stringify(data);
  console.log("Aqui pasamos los datos del form como JSON ", prueba )
    return this.http.post(`http://192.168.1.40/webservice_dev/web-lifeproducts/putProductos/`, data).pipe(
      catchError((error: any) => {
        console.log("Error al pasar los datos hasta aqui", error);
      throw error;
      })
    )
    console.log("Aqui nos deberia de dar successfull si ya se enviaron");
     */
  }
  

}
