import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dir-envio',
  templateUrl: './dir-envio.component.html',
  styleUrls: ['./dir-envio.component.css']
})

export class DirEnvioComponent {

  formInvalido: boolean = false;

  @ViewChild('userForm') userForm: NgForm;
  userData: any;
  
  nombre:string;
  apellido:string;
  correo:string;
  area_code:number;
  telefono:string;
  direccion:string;
  pais:string;
  codigo_postal:string;
  ciudad:string;
  estado:string;
  colonia:string;
  municipio:string;


  constructor(
    private userService: UserService, 
    private router: Router,
    private dataSharing: SharingService
    ){}



  guardarDatosUsuario() {
    if (this.userForm.valid) {
      this.nombre = this.userForm.value.nombre;
      this.apellido = this.userForm.value.apellido;
      this.correo = this.userForm.value.correo;
      this.area_code = this.userForm.value.area_code;
      this.telefono = this.userForm.value.telefono;
      this.direccion = this.userForm.value.direccion;
      this.pais = this.userForm.value.pais;
      this.codigo_postal = this.userForm.value.codigo_postal;
      this.ciudad = this.userForm.value.ciudad;
      this.estado = this.userForm.value.estado;
      this.colonia = this.userForm.value.colonia;
      this.municipio = this.userForm.value.municipio;
  
      // Resto del código para guardar los datos del usuario
      // Obtén los datos del formulario del usuario y guárdalos en un objeto userData.
       this.userData = {
        nombre: this.nombre, 
        apellido: this.apellido, 
        correo: this.correo, 
        area_code :this.area_code,
        telefono: this.telefono,  
        direccion: this.direccion,  
        pais: this.pais,  
        codigo_postal: this.codigo_postal,  
        ciudad: this.ciudad,  
        estado: this.estado,  
        colonia: this.colonia,  
        municipio: this.municipio
      // Añadir más campos de ser necesario
      }
      
      this.userService.setUserData(this.userData);

      this.dataSharing.userData = this.userData;
      /* const userDatos = this.userService.setUserData(this.userData); */
      this.router.navigate(['/resumen'], {
        queryParams: {
          userData: JSON.stringify(this.dataSharing.userData),
          datosCompra: JSON.stringify(this.dataSharing.datosCompra),
        }
      });
      /* this.router.navigate(['/resumen']); */
      /* this.router.navigate(['/resumen'], { state: { productos: userDatos } }); */
      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos obligatorios.'
      });
    }
  }


  
}
