import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPagina} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  dataLoad = false;

  nosotros: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarNosotros();
  }

  private cargarInfo() {
    //Leer el archivo JSON para utilizarlo en todas las paginas
    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
      this.dataLoad = true;
      this.info = resp;

      //console.log(resp);
      //console.log(resp['twitter']);
    });
  }

  private cargarNosotros() {
    //Leer el archivo JSON para utilizarlo en todas las paginas
    this.http.get('https://lifeproducts-cfa68-default-rtdb.firebaseio.com/equipo.json').subscribe((resp: any) => {
      /* this.dataLoad = true;
            this.info = resp; */

      this.nosotros = resp;
      //console.log(resp);

      //console.log(resp);
      //console.log(resp['twitter']);
    });
  }
}
